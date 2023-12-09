/*
Project: uebung08_cars
Author:  nottj
Date:    28.11.2023
*/

'use strict';

const appName = 'Autos';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading1').innerText = appName;

//inputs

const inputBrand = document.getElementById('inputBrand');
const inputModel = document.getElementById('inputModel');
const inputPS = document.getElementById('inputPS');
const inputFuelType = document.getElementById('inputFuelType');
const inputMaxFuel = document.getElementById('inputMaxFuel');
const inputDistance = document.getElementById('inputDistance');
const inputSearchBrand = document.getElementById('inputSearchBrand');
const inputColor = document.getElementById('inputColor');
const inputFuelConsumption = document.getElementById('inputFuelConsumption');
const inputGearbox = document.getElementById('inputGearbox');
const inputSearchFuelConsumption = document.getElementById(
  'inputSearchFuelConsumption'
);

//buttons

const buttonAddCar = document.getElementById('buttonAddCar');
const buttonShowCarInfo = document.getElementById('buttonShowCarInfos');
const buttonSearchBrand = document.getElementById('buttonSearchBrand');
const buttonSearchConsumption = document.getElementById(
  'buttonSearchConsumption'
);

//outputs

const output = document.getElementById('output');
const output2 = document.getElementById('output2');

// Definition of class "Car"
class Car {
  //private properties
  #PS;
  #fuelType;
  #maxFuel;
  #currentFuel;
  #distance;
  #consumptionPer100km;
  #gearBox;

  //constructor for the car
  constructor(
    brand,
    model,
    PS,
    fuelType,
    maxFuel,
    consumptionPer100km,
    gearBox,
    color
  ) {
    //initialisation of all the properties
      (this.brand = brand),
      (this.model = model),
      (this.PS = PS),
      (this.fuelType = fuelType),
      (this.maxFuel = maxFuel),
      (this.consumptionPer100km = consumptionPer100km),
      (this.gearBox = gearBox),
      (this.color = color),
      (this.#currentFuel = maxFuel),
      (this.#distance = 0);

    //array used for expert-task - used to save 10 last drives
    this.kmArray = [];
  }

  //getter and setter for private properties

  set PS(value) {
    if (value >= 55 && value <= 265) {
      this.#PS = value;
    } else {
      this.#PS = 100;
    }
  }
  get PS() {
    return this.#PS;
  }

  set fuelType(value) {
    if (value == 'Diesel' || value == 'Benzin') {
      this.#fuelType = value;
    } else {
      this.#fuelType = 'Diesel';
    }
  }
  get fuelType() {
    return this.#fuelType;
  }

  set maxFuel(value) {
    if (value >= 30 && value <= 85) {
      this.#maxFuel = value;
    } else {
      this.maxFuel = 45;
    }
  }

  get maxFuel() {
    return this.#maxFuel;
  }

  get currentFuel() {
    return this.#currentFuel;
  }

  get distance() {
    return this.#distance;
  }

  set consumptionPer100km(value) {
    if (value >= 5 && value <= 20) {
      this.#consumptionPer100km = value;
    } else {
      this.#consumptionPer100km = 7;
    }
  }

  get consumptionPer100km() {
    return this.#consumptionPer100km;
  }

  set gearBox(value) {
    if (value == 'Manuell' || value == 'Automatik') {
      this.#gearBox = value;
    } else {
      this.#gearBox = 'Manuell';
    }
  }

  get gearBox() {
    return this.#gearBox;
  }

  //methods

  //drive method - simulates driving a car
  drive(km) {
    if (this.#currentFuel > 0) {
      //the car can only drive with fuel
      if (km >= 10 && km <= 600) {
        //the car can't drive less than 10km and more than 600km
        let fuelConsumed = km / (100 / this.#consumptionPer100km);
        if (this.#currentFuel >= fuelConsumed) {//the car can only drive the distance if it has enough fuel
          this.#distance += km;

          //km driven added to an array
          this.kmArray.push(km);
          if (this.kmArray.length >= 11) {//after the 10th drive the last element gets deleted
            this.kmArray.pop();
          }
        } else {
          return -1;//"error code" - not enough fuel for the entire drive
        }
      } else {
        return -2;//"error code" - distance too short or long
      }
    }
    return -3;//"error code" -  no fuel
  }


  //checks if tank is empty
  isTankEmpty() {
    if (this.#currentFuel == 0) {
      return true;
    }
    return false;
  }

  //rates the car, if it is very used or not
  getDistanceType() {
    if (this.#distance <= 15000) {
    } else if (this.distance <= 35000) {
      return 'fast wie neu';
    } else if (this.distance <= 70000) {
      return 'durchschnittlich lange gefahren';
    } else if (this.distance <= 100000) {
      return 'lange gefahren';
    } else if (this.distance > 100000) {
      return 'sehr lange gefahren';
    }
  }

  //returns all params of the car
  getCarInfo() {
    return Array(
      String('Marke: ' + this.brand),
      String(' Modell: ' + this.model),
      String(' PS: ' + this.#PS),
      String(' Treibstofftyp: ' + this.#fuelType),
      String(' Tankgröße: ' + this.#maxFuel),
      String(' Aktueller Tankinhalt: ' + this.#currentFuel),
      String(' Kilometerstand: ' + this.#distance),
      String(' Getriebeart: ' + this.#gearBox),
      String(' Verbrauch auf 100km: ' + this.#consumptionPer100km),
      String(' Farbe: ' + this.color)
    );
  }
}

//functions

//used to increase the distance driven for all cars of a certain brand
function increaseKilometersOfAll(brand, carArray, km) {
  for (let car of carArray) {
    if (car.brand == brand) {
      car.distance += km;
    }
  }
}

//gets all cars with a fuel consumption over an amount of X
function getCarsWithCertainFuelConsumption(carArray, fuelConsumption) {
  let carArray2 = [];
  for (let car of carArray) {
    if (fuelConsumption <= car.consumptionPer100km) {
      carArray2.push(car);
    }
  }
  return carArray2;
}

/*************************
 * Main Program
 ************************/

let carInventory = []; // declare an empty array which represents our car inventory

// when button Add Car is clicked, a new car object is created and added to our carInventory
buttonAddCar.onclick = function () {
  carInventory.push(
    new Car(
      inputBrand.value,
      inputModel.value,
      inputPS.value,
      inputFuelType.value,
      inputMaxFuel.value,
      inputFuelConsumption.value,
      inputGearbox.value,
      inputColor.value
    )
  );
};

//shows all cars with all their infos
buttonShowCarInfo.onclick = function () {
  output.innerHTML = '';
  let output1 = '';
  for (let car of carInventory) {
    output1 = output1 + '<br>' + car.getCarInfo();
  }
  output.innerHTML = output1;
};

//search for all cars of a specific brand
buttonSearchBrand.onclick = function () {
  output2.innerHTML = '';
  let hasBeenFound = false;
  let output = '';
  let brandToSearch = inputSearchBrand.value;
  for (let car of carInventory) {
    if (brandToSearch == car.brand) {
      output = output + car.getCarInfo() + '<br>';
      hasBeenFound = true;
    }
  }
  if (hasBeenFound == true) {
    output2.innerHTML = output;
  } else if (hasBeenFound == false) {
    output2.innerHTML = 'Marke konnte nicht gefunden werden';
  }
};

//searches for all cars which consume more than X amount of fuel on 100km
buttonSearchConsumption.onclick = function () {
  output2.innerHTML = '';
  let consumptionArray = getCarsWithCertainFuelConsumption(
    carInventory,
    inputSearchFuelConsumption.value
  );
  let output1 = '';
  for (let car of consumptionArray) {
    output1 = output1 + '<br>' + car.getCarInfo();
  }
  output2.innerHTML = output1;
};
