/*
Project: uebung010_musicalbum
Author:  nottj
Date:    12.12.2023
*/

//test

'use strict';

const appName = 'Musikalben';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading1').innerText = appName;

//inputs

const inputAlbum = document.getElementById('inputAlbum');
const inputInterpret = document.getElementById('inputInterpret');
const inputLength = document.getElementById('inputLength');
const inputYear = document.getElementById('inputYear');
const inputRating = document.getElementById('inputRating');
const inputSearchInterpret = document.getElementById('inputSearchInterpret');

//Buttons

const buttonAddAlbum = document.getElementById('buttonAddAlbum');
const buttonSearch = document.getElementById('buttonSearch');
const buttonClearList = document.getElementById('buttonClearList');

//Outputs

const output = document.getElementById('output');
const output2 = document.getElementById('output2'); //table

//class Album gets created

class Album {
  #id;
  #title;
  #length;
  #year;
  #rating;
  constructor(title, interpret, length, year, rating) {
    (this.#id = Album.id++),
      (this.title = title),
      (this.length = length),
      (this.year = year),
      (this.rating = rating),
      (this.interpret = interpret);
  }

  //setter

  set title(value) {
    if (value != '') {
      this.#title = value;
    } else {
      this.#title = 'N/A';
    }
  }
  set length(value) {
    if (value >= 5 && value <= 80) {
      this.#length = value;
    } else {
      this.#length = 35;
    }
  }
  set year(value) {
    if (value >= 1960 && value <= 2023) {
      this.#year = value;
    } else {
      this.#year = 2000;
    }
  }
  set rating(value) {
    if (value >= 1 && value <= 10) {
      this.#rating = value;
    } else {
      this.#rating = 5;
    }
  }

  //getter

  get id() {
    return this.#id;
  }
  get title() {
    return this.#title;
  }
  get length() {
    return this.#length;
  }
  get year() {
    return this.#year;
  }
  get rating() {
    return this.#rating;
  }
}
Album.id = 100;

//Functions

//shows a table in the GUI with all the albums or just with the albums of a specific interpret

function showTable(array, interpret) {
  let table = `
    <thead>
      <td> Albumname  </td>
      <td>   Interpret  </td>
      <td>   Erscheinungsjahr  </td>
      <td>   Länge  </td>
      <td>   Bewertungen  </td>
      <td>  ID  </td>
    </thead>`;

  if (interpret != '') {
    for (let album of array) {
      if (album.interpret == interpret) {
        table += `<tr><td>${album.title}</td><td>${album.interpret}</td><td>${album.year}</td><td>${album.length}</td><td>${album.rating}</td><td>${album.id}</td></tr>`;
      }
    }
  } else {
    for (let album of array) {
      table += `<tr><td>${album.title}</td><td>${album.interpret}</td><td>${album.year}</td><td>${album.length}</td><td>${album.rating}</td><td>${album.id}</td></tr>`;
    }
  }
  return table;
}

//Main-Code execution

let albumArray = [];



//Event-Handling

buttonAddAlbum.onclick = function () {
  albumArray.push(
    new Album(
      inputAlbum.value,
      inputInterpret.value,
      inputLength.value,
      inputYear.value,
      inputRating.value
    )
  );
  output2.innerHTML = showTable(albumArray,'');
};

buttonClearList.onclick = function () {
  let confirmDelete = confirm('Wollen sie alle Alben unwiderruflich löschen?');
  if (confirmDelete == true) {
    albumArray = [];
  }
  output2.innerHTML = showTable(albumArray,'')
};

buttonSearch.onclick = function () {
  
  output2.innerHTML = showTable(albumArray,inputSearchInterpret.value);
};
