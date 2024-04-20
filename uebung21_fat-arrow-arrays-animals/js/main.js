/*
Project: uebung21_fat_arrow-arrays-animals
Author:  nottj
Date: 16.04.2024
*/

'use strict';

const appName = 'Übung21 Fat Arrows und Array Functions Animals';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

//class

class Animal {
  constructor(name, age, animalType) {
    this.name = name;
    this.age = age;
    this.animalType = animalType;
  }
}

//new animals Array

let animals = [
  new Animal('Rex', 3, 'dog'),
  new Animal('Bello', 6, 'dog'),
  new Animal('Tom', 1, 'cat'),
  new Animal('Max', 4, 'cat'),
  new Animal('Carlo', 4, 'cat'),
  new Animal('Rex', 2, 'dog'),
];

//sort

//sorts animals by their name

let sortedAnimals1 = [...animals];
sortedAnimals1.sort((a, b) => a.name.localeCompare(b.name));

//sorts animals by their name; cats are sorted before dogs

let sortedAnimals2 = [...animals];
sortedAnimals2.sort(
  (a, b) => a.name.localeCompare(b.name) && a.animalType.localeCompare(b.animalType));
console.log(sortedAnimals2);
console.log(animals);

//map

//array with only animal names

let nameArray = animals.map((a) => a.name);
console.log(nameArray);

//array with animal ages + 1 year

let incrementedArray = animals.map((a) => a.age + 1);
console.log(incrementedArray);

//filter

//filters out all the dogs

let dogArray = animals.filter((a) => a.animalType == 'dog');
console.log(dogArray);
console.log(animals);

//filters max

let max = animals.filter((a) => a.name == 'Max');

//filters all the cats, which are at least 3 y.o.

let catArray = animals.filter((a) => a.animalType == 'cat' && a.age >= 3);

//reduce

//sums all the animal ages

let ageSum = animals.reduce((sum, animal) => sum + animal.age, 0);

console.log(ageSum);

//combined

//gets the sum of all cat ages

let catSum = animals.filter((a) => a.animalType == 'cat').reduce((sum, animal) => sum + animal.age, 0);

console.log(catSum);

//gets the average dog age

let avrgDogAge = animals.filter((a) => a.animalType == 'dog').reduce((sum, animal) => sum + animal.age, 0) / dogArray.length;

console.log(avrgDogAge);

//creates a map from the animals array

let animalMap = new Map(animals.map((a) => [a.name, a]));

console.log(animalMap);

//gets Tom

let Tom = animalMap.get('Tom');
console.log(Tom);

//gets Neddo (Neddo doesnt exist)

let Neddo = animalMap.get('Neddo');
console.log(Neddo);

//creates a new dog named Nero

animalMap.set('Nero', new Animal('Nero',3,'dog'));
console.log(animalMap.keys());

//creates a new array from the map

let newAnimals = Array.from(animalMap.values());

console.log(newAnimals);

//gets the type of animal in the array

let animalType = animals.map((a) => a.animalType); //only animal types (but with duplicates)
let condensedAnimalType = animalType.filter((item, index) => animalType.indexOf(item) == index); //filters out duplicates

console.log(condensedAnimalType);