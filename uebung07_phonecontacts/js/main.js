/*
Project: uebung07_phonecontacts
Author:  nottj
Date:  14.11.2023
*/

'use strict';

const appName = 'Übung 07 - Telefonkontakte';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading1').innerText = appName;

//Here are all the inputs defined

const inFirstName = document.getElementById('inFirstName');
const inLastName = document.getElementById('inLastName');
const inPhoneNumber = document.getElementById('inPhoneNumber');
const inContactType = document.getElementById('inContactType');
const inSpentTime = document.getElementById('inSpentTime');
const inUserId = document.getElementById('inUserId');
const inSearchLastName = document.getElementById('inSearchLastName');
const inCallContact = document.getElementById('inCallContact');
const inCallContactTime = document.getElementById('inCallContactTime');
const inDeleteId = document.getElementById('inDeleteId');

//Here are all the buttons defined

const btnAddContact = document.getElementById('btnAddContact');
const btnShowAll = document.getElementById('btnShowAll');
const btnCall = document.getElementById('btnCall');
const btnSearchId = document.getElementById('btnSearchId');
const btnSearchLastName = document.getElementById('btnSearchLastName');
const btnCallContact = document.getElementById('btnCallContact');
const btnDeleteId = document.getElementById('btnDeleteId');

//And here the output is defined

const outputInfos = document.getElementById('outputInfos');


//definition of the class phoneContact
class PhoneContact {
  constructor(firstName, lastName, contactType, phoneNumber) {
    this.id = PhoneContact.id++;
    (this.timesCalled = this.firstName = firstName),
    (this.lastName = lastName),
    (this.phoneNumber = phoneNumber),
    (this.timeSpentInCall = 0);
    if (contactType == 'privat') {
      this.contactType = 'privat';
    } else if (contactType != 'privat' || contactType == 'geschäftlich') {
      this.contactType = 'geschäftlich';
    }
  }
  call(minutes) {
    //"calls" the contact and adds the length of the call to the contact
    if (minutes > 0) {
      this.timeSpentInCall += Number(minutes);
      PhoneContact.timesCalled = ++PhoneContact.timesCalled;
    }
  }
  resetMinutes() {
    //resets time spent in call
    this.timeSpentInCall = 0;
    PhoneContact.timesCalled = 0;
  }
  getInfo() {
    return Array(
      //returns every value of a contact
      String('Vorname: ' + this.firstName),
      String(' Nachname: ' + this.lastName),
      String(' Telefonnummer: ' + this.phoneNumber),
      String(' Kontakttyp: ' + this.contactType),
      String(' Zeit in einem Telefonat verbracht: ' + this.timeSpentInCall),
      String(' ID: ' + this.id)
    );
  }
  getFullName() {
    //returns the full name of the contact
    return this.firstName + this.lastName;
  }
  avgMinutesPerCall() {
    //calculates an average for time spent in call
    return this.timeSpentInCall / PhoneContact.timesCalled;
  }
}
//gives each account an id and adds a counter
PhoneContact.id = 1;
PhoneContact.timesCalled = 0;


//array for contacts

let contactArray = [];

//functions

//returns the most called contact
function getMostCalled(contactArray) {
  let numberOfMostCalls = 0;
  let mostCalledContact;
  for (let i = 0; i < contactArray.length; i++) {
    if (contactArray[i].timesCalled > numberOfMostCalls) {
      numberOfMostCalls = contactArray[i].timesCalled;
      mostCalledContact = contactArray[i];
    }
  }
  return mostCalledContact;
}

//calls one specific person only
function call(phoneNumber, callTime) {
  for (let contact of contactArray) {
    if (contact.phoneNumber == phoneNumber) {
      contact.call(callTime);
    }
  }
}

//event-handling

//creates a new contact with the PhoneContact-class and adds it to the array 

btnAddContact.onclick = function () {
  contactArray.push(
    new PhoneContact(
      inFirstName.value,
      inLastName.value,
      inContactType.value,
      inPhoneNumber.value
    )
  );
};

//shows all the contacts in the array

btnShowAll.onclick = function () {
  outputInfos.innerHTML = '';
  let output = '';
  for (let contact of contactArray) {
    output = output + '<br>' + contact.getInfo();
  }
  outputInfos.innerHTML = output;
};

//calls everyone for a specific amount of time

btnCall.onclick = function () {
  for (let contact of contactArray) {
    contact.call(inSpentTime.value);
  }
};

//searches a phone contact by its id

btnSearchId.onclick = function () {
  outputInfos.innerHTML = '';
  let contactToSearch = inUserId.value;
  for (let contact of contactArray) {
    if (contactToSearch == contact.id) {
      outputInfos.innerHTML = contact.getInfo();
      return;
    }
  }
  outputInfos.innerHTML = 'Kontakt konnte nicht gefunden werden';
};

//searches a phone contact by contacts last name

btnSearchLastName.onclick = function () {
  outputInfos.innerHTML = '';
  let hasBeenFound = false;
  let output = '';
  let contactToSearch = inSearchLastName.value;
  for (let contact of contactArray) {
    if (contactToSearch == contact.lastName) {
      output = output + contact.getInfo() + '<br>';
      hasBeenFound = true;
    }
  }
  if (hasBeenFound == true) {
    outputInfos.innerHTML = output;
  } else if (hasBeenFound == false) {
    outputInfos.innerHTML = 'Kontakt konnte nicht gefunden werden';
  }
};

//calls one specific contact for a certain number of time

btnCallContact.onclick = function () {
  for (let contact of contactArray) {
    if (contact.phoneNumber == inCallContact.value) {
      call(contact.phoneNumber, inCallContactTime.value);
    }
  }
};

//deletes a contact with a specific id

btnDeleteId.onclick = function () {
  outputInfos.innerHTML = '';
  let confirmDelete = confirm('Wollen sie den Kontakt wirklich löschen?');
  if (confirmDelete == true) {
    for (let i = 0; i < contactArray.length; i++) {
      if (contactArray[i].id == inDeleteId.value) {
        contactArray.splice(i, 1);
      }
    }
    return;
  } else if (confirmDelete == false) {
    return;
  }
};
