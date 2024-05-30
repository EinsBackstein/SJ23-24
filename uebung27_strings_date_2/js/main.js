/*
Project: uebung27_strings_date_2
Author:  nottj
Date: 28.05.2024
*/

'use strict';

const appName = 'Übung27 Strings Date 2';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

//functions

//gets the NW-Address for a specific IP with a Subnet of /24, /16 or /8
function getNetwork(ip, subnet) {
  if (subnet == 8 || subnet == 16 || subnet == 24) {
    let addr = ip.split('.');
    for (let i = 0; i <= 3; i++) {
      addr[i] = Number(addr[i]);
      if (!(Number.isInteger(addr[i]) == true && addr[i] >= 0 && addr[i] <= 255)) {
        throw new Error(`Octett ${i+1} ist ungültig`);
      }
    }

    if (subnet == 8) {
      return `NW-Addresse: ${addr[0]}.0.0.0`;
    } else if (subnet == 16) {
      return `NW-Addresse: ${addr[0]}.${addr[1]}.0.0`;
    } else if (subnet == 24) {
      return `NW-Addresse: ${addr[0]}.${addr[1]}.${addr[2]}.0`;
    }

  } else {
    throw new Error('Inkorrektes Subnet (entweder 8, 16 oder 24)');
  }
}

//converts a file extension to another one
function extensionConvert(filename, newExtension){
  let file = filename.split('.');
  if(file.length >= 2){
    let fileNameLength = file.length;
    file.splice(fileNameLength-1,1,newExtension);
    let newFileName = `${file[0]}`;
    for(let i = 1; i < file.length; i++){
      newFileName += `.${file[i]}`;
    }
    return newFileName;
  }else if(file.length == 1){
    return filename+newExtension;
  }
}

//checks the beginning and ending of a schoolClass-Name and returns the branch
function checkSchoolClass(input){
  let firstSymbol = input[0];
  if(isNaN(firstSymbol) != true){
    if(input.endsWith('IT')){
      return 'IT';
    }else if(input.endsWith('ITM')){
      return 'IT-MT';
    }else if(input.endsWith('ITN')){
      return 'IT-NT';
    }else if(input.endsWith('ITS')){
      return 'IT-S';
    }else{
      return null;
    }
  }else{
    return null;
  }
}

//check if a day is a day on the weekend
function isWeekend(date){
  let day = new Date(date);
  let weekday = day.getDay();
  if(weekday == 0 || weekday == 6){
    return true;
  }
  return false;
}

//checks how many days a month has
function daysOfMonthInYear(year, month){
  for(let i = 31; i > 0; i--){
    let date = new Date(year, month);
    date.setDate(i);
    if(i == date.getDate()){
      return date.getDate();
    }
  }
}

//tests
try {
  console.log(getNetwork('192.168.10.1', 24));
  console.log(getNetwork('192.168.100.100', 16));
  console.log(getNetwork('172.16.14.001', 8) + '\n');
} catch (error) {
  console.log(error);
}

console.log(extensionConvert('pic.jpeg','png'));
console.log(extensionConvert('test.test.txt','pdf') + '\n');

console.log(checkSchoolClass('1AHIT'));
console.log(checkSchoolClass('1AHITM'));
console.log(checkSchoolClass('1AHITN'));
console.log(checkSchoolClass('1AHITS'));
console.log(checkSchoolClass('AHITN'));
console.log(checkSchoolClass('1AHIF') + '\n');

console.log(isWeekend('Nov 16, 2014'));
console.log(isWeekend('Nov 17, 2014') + '\n');

console.log(daysOfMonthInYear(2014,0));
console.log(daysOfMonthInYear(2014,1));
console.log(daysOfMonthInYear(2014,3));
