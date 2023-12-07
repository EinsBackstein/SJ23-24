/*
Project: uebung04_objects_real_estate
Author:  nottj
Date: 17.10.2023
*/

'use strict';

const appName = 'Übung04 Objects Real Estate';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

//Here I defined an object for some real estate with some propertys

let realEstate = {
  type: 'Wohnung',
  payment: 'Miete',
  length: 10,
  width: 8,
  floors: 1,
  basement: true,
  rooms: 3,
  year_of_construction: 2013,
  rent: 700,

  //This method is used to give out all of the propertys

  showImmoInfo() {
    document.write(
      ` <br> ${
        this.type == 'Wohnung'
          ? 'Dieses Objekt ist eine Wohnung'
          : 'Dieses Objekt ist ein Haus'
      } <br>`
    );
    document.write(
      `${
        this.payment == 'Miete'
          ? 'Dies ist ein Mietobjekt'
          : 'Dies ist ein Eigentumsobjekt'
      } <br>`
    );
    document.write(`Die Länge der Immobilie beträgt ${this.length}m <br>`);
    document.write(`Die Breite der Immobilie beträgt ${this.width}m <br>`);
    document.write(`Die Immobilie hat ${this.floors} Stockwerke <br>`);
    document.write(
      `${
        this.basement
          ? 'Dieses Objekt hat einen Keller'
          : 'Dieses Objekt hat keinen Keller'
      } <br>`
    );
    document.write(`Die Immobilie hat ${this.rooms} Räume <br>`);
    document.write(
      `Die Immobilie ist ${this.year_of_construction} erbaut worden <br>`
    );
    document.write(`Die Kosten betragen ${this.rent}€ <br>`);
  },

  //This method is used to calculate the total area of the real estate

  getArea() {
    document.write(
      `<br> Die Gesamtfläche der Immobilie beträgt ${
        this.length * this.width + 5 /*Basement = 5m*/
      }m <br>`
    );
  },

  //This method is used to check, if the real estate is square

  isSquare() {
    if (this.length == this.width) {
      return true;
    }
    return false;
  },

  //This method is used to calculate the price which you would have to pay per m²

  getPricePerSqareMeter() {
    return this.rent / (this.length * this.width);
  },

  //This method is used to compare the sizes of two different real estates and checks, if they have the same size
  
  hasSameArea(anotherRealEstate) {
    if (
      this.length * this.width ==
      anotherRealEstate.length * anotherRealEstate * this.width
    ) {
      return true;
    }
    return false;
  },
};

//1

document.write(
  ` <br> ${
    realEstate.type == 'Wohnung'
      ? 'Dieses Objekt ist eine Wohnung'
      : 'Dieses Objekt ist ein Haus'
  } <br>`
);
document.write(
  `${
    realEstate.payment == 'Miete'
      ? 'Dies ist ein Mietobjekt'
      : 'Dies ist ein Eigentumsobjekt'
  } <br>`
);
document.write(`Die Länge der Immobilie beträgt ${realEstate.length}m <br>`);
document.write(`Die Breite der Immobilie beträgt ${realEstate.width}m <br>`);
document.write(`Die Immobilie hat ${realEstate.floors} Stockwerke <br>`);
document.write(
  `${
    realEstate.basement
      ? 'Dieses Objekt hat einen Keller'
      : 'Dieses Objekt hat keinen Keller'
  } <br>`
);
document.write(`Die Immobilie hat ${realEstate.rooms} Räume <br>`);
document.write(
  `Die Immobilie ist ${realEstate.year_of_construction} erbaut worden <br>`
);
document.write(`Die Kosten betragen ${realEstate.rent}€ <br> <br>`);

//2

realEstate.length = 11;
realEstate.width = 11;

document.write(
  ` <br> ${
    realEstate.type == 'Wohnung'
      ? 'Dieses Objekt ist eine Wohnung'
      : 'Dieses Objekt ist ein Haus'
  } <br>`
);
document.write(
  `${
    realEstate.payment == 'Miete'
      ? 'Dies ist ein Mietobjekt'
      : 'Dies ist ein Eigentumsobjekt'
  } <br>`
);
document.write(`Die Länge der Immobilie beträgt ${realEstate.length}m <br>`);
document.write(`Die Breite der Immobilie beträgt ${realEstate.width}m <br>`);
document.write(`Die Immobilie hat ${realEstate.floors} Stockwerke <br>`);
document.write(
  `${
    realEstate.basement
      ? 'Dieses Objekt hat einen Keller'
      : 'Dieses Objekt hat keinen Keller'
  } <br>`
);
document.write(`Die Immobilie hat ${realEstate.rooms} Räume <br>`);
document.write(
  `Die Immobilie ist ${realEstate.year_of_construction} erbaut worden <br>`
);
document.write(`Die Kosten betragen ${realEstate.rent}€ <br> <br>`);

//3

let realEstate2 = { ...realEstate };

realEstate2.rent = 1200;

document.write(`Preis des 1. Objekts ${realEstate.rent} <br>`);
document.write(`Preis des 2. Objekts ${realEstate2.rent} <br>`);
//4
realEstate.getArea();
realEstate2.getArea();
//5
realEstate2.showImmoInfo();
//6
document.write(`<br> ${realEstate.isSquare()} <br>`);
document.write(`<br> ${realEstate2.isSquare()} <br>`);
//7
document.write(`<br> ${realEstate.getPricePerSqareMeter()}€ pro m² <br>`);
document.write(`<br> ${realEstate2.getPricePerSqareMeter()}€ pro m² <br>`);

delete realEstate.year_of_construction;
delete realEstate2.year_of_construction;
document.write(`${realEstate.hasSameArea(realEstate2)}`);
