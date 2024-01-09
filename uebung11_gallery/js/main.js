/*
Project: uebung011_galery
Author:  nottj
Date: 19.12.2023
*/

'use strict';

const appName = 'Übung11 Gallery';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

//gui

//inputs

const inId = document.getElementById("inId");
const inTitle = document.getElementById("inTitle");
const inWidth = document.getElementById("inWidth");
const inHeight = document.getElementById("inHeight");
const inRating = document.getElementById("inRating");
const inFavourite = document.getElementById("inFavourite");
const inRotate = document.getElementById("inRotate");
const inResize = document.getElementById("inResize");
const inRatingSearch = document.getElementById("inRatingSearch");


//buttons

const btnAdd = document.getElementById("btnAdd");
const btnDelete1 = document.getElementById("btnDelete1");
const btnDeleteA = document.getElementById("btnDeleteA");
const btnRate = document.getElementById("btnRate");
const btnRotate = document.getElementById("btnRotate");
const btnResize = document.getElementById("btnResize");
const btnShowRating = document.getElementById("btnShowRating");
const btnShowAlbum = document.getElementById("btnShowAlbum");

//outputs

const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");

//class

class Photo{
  #id
  #rating
  #size
  #title
  #width
  #height
  constructor(title, width, height, isFavourite, id){
    this.#id = id;
    this.title = title;
    this.width = width;
    this.height = height;
    this.isFavourite = isFavourite;
    this.#size = (`${this.#width}x${this.#height}`)
    this.#rating = [];
  }

  //getter -r

  get id(){
    return this.#id;
  }
  get rating(){
    return this.#rating;
  }
  get size(){
    return this.#size;
  }

  //getter -rw

  get title(){
    return this.#title;
  }
  get width(){
    return this.#width;
  }
  get height(){
    return this.#height;
  }

  //setter -rw

  set title(value){
    if(value != ''){
      this.#title = value;
    }else{
      this.#title = 'unknown'
    }
  }
  set width(value){
    if(value >= 200 && value <= 4600){
      this.#width = value;
    }
    else{
      this.#width = 1800
    }
  }
  set height(value){
    if(value >= 200 && value <= 4600){
      this.#height = value;
    }
    else{
      this.#height = this.#width*0.75;
    }
  }

  //methods

  //"rotates" the picture 90° left or right (same result)
  
  rotate(direction){
    if(direction == true || direction == false){
      let width = this.#width;
      let height = this.#height;
      this.#width = height;
      this.#height = width;
      this.#size = (`${this.#width}x${this.#height}`)
      return 1;
    }
    return -1
  }

  //resizes the picture by a certain percentage

  resize(percent){
    percent = Number(percent);
    if(percent >= 20 && percent <= 500){
      this.#width *= (percent/100)
      this.#height *= (percent/100)
      this.#size = (`${this.#width}x${this.#height}`)
      return 1;
    }
    return -1;
  }

  //adds a rating to the picture, stored in the rating-Array

  rate(rateNumber){
    let num = Number(rateNumber)
    if(Number.isInteger(num)==true && num >= 1 && num <= 5){
      this.#rating.push(rateNumber);
      return 1;
    }
    return -1;
  }

  //counts all the ratings of a certain value

  countRating(rateNum){
    let i = 0;
    for(let entry of this.#rating){
      if(entry == rateNum)
      i++;
    }
    return i;
  }

  //user-info output

  getPhotoInfo(){
    return [
      String(`ID: ${this.#id}  `),
      String(` Titel: ${this.#title}`),
      String(` Größe: ${this.#size}`),
      String(` Favorit: ${this.isFavourite}`),
      String(` Bewertungen: ${this.#rating}`),
    ]
  }
}

//functions

//adds a photo to the map

function addPhoto(title, width, height, isFavourite, id, map){
  if(checkId(map, id)==1){
    let photo = new Photo(title, width, height, Boolean(isFavourite), id)
    map.set(photo.id, photo)
    return 1
  }
  return -1
}

//removes a photo from the map

function removePhoto(id,map){
  if(map.has(id)){
    map.delete(id);
    return 1
  }
return -1
}

//rates a photo using the rate-method

function ratePhoto(map,id,number){
  for(let [key, value] of map.entries()){
    if(key == id){
      let rating = value.rate(number)
      if(rating == -1){
        return -2
      }
      return 1
    }
  }
  return -1
}

//deletes every photo in the album

function clearAlbum(map){
  confirm("Wollen Sie das Fotoalbum wirklich löschen?") ? map.clear() : -1;
}

//checks if an id has already been used before

function checkId(map, id){
  for(let key of map.keys()){
    if(key == id){
      return -1;
    }
  }
  return 1;
}

//map

const gallery = new Map();

//Event Handling

//shows all the photos in the album

btnShowAlbum.onclick = function () {
  output1.innerHTML = "";
  let output = '';
  for(let value of gallery.values()){
    output = output + '<br>' + value.getPhotoInfo();
  }
  output1.innerHTML = output
}

//adds a photo with all its parameters to the album

btnAdd.onclick = function () {
  let adding = addPhoto(inTitle.value, inWidth.value, inHeight.value, inFavourite.checked, inId.value, gallery)
  if(adding == 1){
    output2.innerHTML = "";
    output2.innerHTML = "Hinzufügen erfolgreich";
  }else if(adding == -1){
    output2.innerHTML = "";
    output2.innerHTML = "Fehler beim Hinzufügen des Fotos (Wahrscheinliche doppelte Vergabe der ID)";
  }
}

//deletes one specific photo

btnDelete1.onclick = function () {
  let removal = removePhoto(inId.value, gallery)
  if(removal == 1){
    output2.innerHTML = "";
    output2.innerHTML = "Löschen erfolgreich";
  }else if(removal == -1){
    output2.innerHTML = "";
    output2.innerHTML = "Fehler beim Löschen des Fotos (ID nicht vorhanden)";
  }
}

//deletes all the photos

btnDeleteA.onclick = function () {
  clearAlbum(gallery)
}

//rates a certain photo

btnRate.onclick = function () {
  let rating = ratePhoto(gallery, inId.value,inRating.value);
  if(rating == 1){
    output2.innerHTML = "";
    output2.innerHTML = "Bewertung erfolgreich";
  }else if(rating == -1){
    output2.innerHTML = "";
    output2.innerHTML = "ID konnte nicht gefunden werden";
  }else if(rating == -2){
    output2.innerHTML = "";
    output2.innerHTML = "Ungültige Eingabe bei der Bewertung";
  }
}

//rotates a certain photo

btnRotate.onclick = function () {
  if(gallery.has(inId.value)){
    let photo = gallery.get(inId.value);
    if(Number(inRotate.value) > 0){
      let rotation = photo.rotate(true);
      if(rotation == 1){
        output2.innerHTML = "";
        output2.innerHTML = "Drehen erfolgreich";
      }else if(rotation == -1){
        output2.innerHTML = "";
        output2.innerHTML = "Drehen nicht erfolgreich";
      }
    }else if(Number(inRotate.value) < 0){
      let rotation = photo.rotate(false);
      if(rotation == 1){
        output2.innerHTML = "";
        output2.innerHTML = "Drehen erfolgreich";
      }else if(rotation == -1){
        output2.innerHTML = "";
        output2.innerHTML = "Drehen nicht erfolgreich";
      }
    }
  }else{
    output2.innerHTML = "";
    output2.innerHTML = "ID konnte nicht gefunden werden";
  }
}

//resizes a certain photo

btnResize.onclick = function () {
  if(gallery.has(inId.value)){
    let photo = gallery.get(inId.value);
    let resizing = photo.resize(Number(inResize.value));
    if(resizing == 1){
      output2.innerHTML = "";
      output2.innerHTML = "Größe ändern erfolgreich";
    }else if(resizing == -1){
      output2.innerHTML = "";
      output2.innerHTML = "Größe ändern nicht erfolgreich";
    }
  }else{
    output2.innerHTML = "";
    output2.innerHTML = "ID konnte nicht gefunden werden";
  }
}

//shows all the ratings of a specific value from a certain photo

btnShowRating.onclick = function () {
  if(gallery.has(inId.value)){
    let photo = gallery.get(inId.value);
    photo.countRating(inRatingSearch.value);
  }
}
