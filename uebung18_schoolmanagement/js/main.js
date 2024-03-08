/* Project: uebung17_school_management
Author:  nottj
Date: 28.02.2024 */

'use strict';
const appName = 'uebung18 School-Management';
document
  .getElementById('myTitle')
  .innerText = appName;
document.getElementById('myHeading');

//GUI

//inputs

const inputFirstname = document.getElementById('inputFirstname');
const inputLastname = document.getElementById('inputLastname');
const inBirth = document.getElementById('inputBirthDate');
const inputID = document.getElementById('inputID');

//buttons

const btnSave = document.getElementById('btnSave');
const btnShow = document.getElementById('btnShow');
const btnClear = document.getElementById('btnClear');
const btnSearch = document.getElementById('btnSearch');

//outputs

const messages = document.getElementById('messages');
const output = document.getElementById('output');
const error = document.getElementById('error');

//classes

//student class

class Student {

  static #idCounter = 1;
  #id;

  constructor(firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;

    let birthArray = birthDate.split('-');
    this.birthYear = birthArray[0];
    this.birthMonth = birthArray[1];
    this.birthDay = birthArray[2];

    this.#id = Student.#idCounter++;
  }

  get id() {
    return this.#id;
  }

  get idCounter() {
    return Student.#idCounter;
  }

}

//schoolclass - Class (used to group up multiple students)

class SchoolClass {

  #className;
  #students;
  #maxStudents;

  constructor(className, maxStudents) {
    this.#className = className;
    this.#students = new Map();
    this.#maxStudents = maxStudents;
  }

  get className() {
    return this.#className;
  }

  get students() {
    return this.#students;
  }

  get maxStudents() {
    return this.#maxStudents;
  }

  addStudent(student) {
    if (this.#students.size < this.#maxStudents) {
      this
        .#students
        .set(student.id, student);
      return true;
    } else {
      // Klasse voll
      return false;
    }
  }

  getStudent(id) {

    let student = this.#students.get(id);

    if (student) {
      return student;
    }
    return null;
  }

  removeStudent(id) {
    return this
      .#students
      .remove(id);
  }

  findStudent(firstname, lastname) {
    for (let st of this.#students.values()) {
      if (st.firstname == firstname && st.lastname == lastname) {
        return st;
      }
    }
    return null;
  }

  clear() {
    this
      .#students
      .clear();
  }

  getStudentTable() {
    let studentTable = `<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">id</th>
      <th scope="col">firstName</th>
      <th scope="col">lastName</th>
      <th scope="col">birthDate</th>
    </tr>
  </thead>
  <tbody>`;
    let i = 0;
    for (let student of this.#students.values()) {
      studentTable += `<tr><th scope="row">${++ i}</th>` + `<td>${student.id}</td>` + `<td>${student.firstName}</td>` +
                    `<td>${student.lastName}</td>` + `<td>${ (new Date(student.birthDate)).toLocaleDateString(
        'de-AT'
      )}</td></tr>`;
    }
    studentTable = studentTable + '</tbody></table>';
    if (this.#students.size >= this.#maxStudents) {
      studentTable = studentTable + '<div class="alert alert-warning" role="alert">Kl' +
                    'asse ist voll</div>';
    }
    return studentTable;
  }
}

let class1 = new SchoolClass('2HIT', 5);

//event handling

//saves a student to the class

btnSave.onclick = function () {
  let fn = inputFirstname.value;
  let ln = inputLastname.value;
  let bd = inBirth.value;

  let ns = new Student(fn, ln, bd);

  let added = class1.addStudent(ns);
  messages.innerHTML = '';

  if (added == true) {
    messages.innerHTML = 'Schüler erfolgreich hinzugefügt';
  }else if(added == false){
    error.innerHTML = 'Klasse voll';
  }
};

//puts out all the students in a table

btnShow.onclick = function () {
  output.innerHTML = '';
  output.innerHTML = class1.getStudentTable();

  messages.innerHTML = '';
};

//clears the class

btnClear.onclick = function () {
  if(confirm('Sollen alle Schüler sitzenbleiben?') == true){
    class1.clear();
  
    output.innerHTML = '';
    output.innerHTML = class1.getStudentTable();
  
    messages.innerHTML = '';
    messages.innerHTML = 'Alle sitzengeblieben... Klasse leer';
  }
};

//searches for one specific student

btnSearch.onclick = function () {
  let id = inputID.value;

  id = Number(id);
  let std = class1.getStudent(id);

  output.innerHTML = '';
  output.innerHTML = 'Name: ' + std.firstName + ' ' + std.lastName + ' ' + 'Geburtstag: ' +  std.birthDay + '.' + std.birthMonth + '.' + std.birthYear;
};