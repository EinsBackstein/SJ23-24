/*
Project: uebung0129_network_switch
Author:  nottj
Date: 09.01.2023
*/

'use strict';

const appName = 'Übung19 Network Switch';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

//imports
import Switch from './switch.js';

// //gui

// //inputs

// const inName = document.getElementById('inName');
// const inIP = document.getElementById('inIP');
// const inMax = document.getElementById('inMax');
// const inType = document.getElementById('inType');
// const inRes = document.getElementById('inRes');
// const inColor = document.getElementById('inColor');
// const inMAC = document.getElementById('inMAC');

// const inputs = document.getElementsByTagName('input');

// //buttons

// const btnSave = document.getElementById('btnSave');
// const btnList = document.getElementById('btnList');
// const btnSearch = document.getElementById('btnSearch');
// const btnClear = document.getElementById('btnClear');
// const btnEdit = document.getElementById('btnEdit');


// //outputs

// const output1 = document.getElementById('output1');
// const output2 = document.getElementById('output2');


//functions

//checks the user input

// function checkInput(input){
//   if(input != ''){
//     return true;
//   }
//   return false;
// }

//generates a mac-address

function generateMAC(){
  let hex = '0123456789ABCDEF';
  let macAddress = '';
  for(let i = 0; i<6; i++){
    macAddress += hex.charAt(Math.round(Math.random() * 15));
    macAddress += hex.charAt(Math.round(Math.random() * 15));
    if(i < 5){
      macAddress += ':';
    }
  }
  return macAddress;
}

//adds a printer to the map

// function addPrinter(map, hostname, ipAddress, maxPaper, printerType, printResolution, colorPrinter){
//   let mac = generateMAC();
  
//   while(map.has(mac)==true){
//     mac = generateMAC();
//   }
  
//   let printer = new Printer(hostname, mac, ipAddress, maxPaper, printerType, colorPrinter, printResolution);
//   map.set(printer.macAddress, printer);
//   return true;
// }

//map

// const printers = new Map();

//Event Handling

//generates and saves a printer to the map

// btnSave.onclick = function(){
  
//   if(checkInput(inName.value) == true && checkInput(inMax.value) == true && checkInput(inType.value) == true && checkInput(inRes.value) == true && checkInput(inColor.checked) == true){
    
//     addPrinter(printers, inName.value, inIP.value, inMax.value, inType.value, inRes.value, inColor.checked);
//     output2.innerHTML='';
//     output2.innerHTML = 'Drucker erfolgreich hinzugefügt';
    
//     inputs.value = '';
//     return true;
//   }
//   output2.innerHTML='';
//   output2.innerHTML = 'Drucker konnte nicht hinzugefügt werden';
//   return false;
// };

// //shows all the printers

// btnList.onclick = function(){
//   output1.innerHTML = '';
//   let output = '';
//   for(let value of printers.values()){
//     output = output + '<br>' + value.getPrinterInfo();
//   }
//   output1.innerHTML = output;
// };

// //searches for one specific printer

// btnSearch.onclick = function(){
//   if(checkInput(inMAC.value)==true){
//     if(printers.has(inMAC.value)==true){
//       let output = printers.get(inMAC.value);
//       let value = output.getPrinterInfo();
//       output1.innerHTML='';
//       output1.innerHTML=value;
//       return true;
//     }else{
//       output2.innerHTML='';
//       output2.innerHTML = 'Drucker konnte nicht gefunden werden';
//       return false;
//     }
//   }
// };

// //clears the map

// btnClear.onclick = function(){
//   confirm('Wollen Sie wirklich alle Drucker aus dem System entfernen?') ? printers.clear() : false;
// };

// //edits one specific printer

// btnEdit.onclick = function(){
//   if(checkInput(inMAC.value)==true){
//     if(printers.has(inMAC.value)==true){
//       let output = printers.get(inMAC.value);
//       if(checkInput(inName.value) == true){
//         output.hostname = inName.value;
//       }
//       if(checkInput(inMax.value) == true){
//         output.maxPaper = inMax.value;
//       }
//       if( checkInput(inType.value) == true ){
//         output.printerType = inType.value;
//       }
//       if( checkInput(inRes.value) == true ){
//         output.printResolution = inRes.value;
//       }
//       if( checkInput(inColor.checked) == true){
//         output.colorPrinter = inColor.checked;
//       }
//       if(checkInput(inIP.value)==true){
//         output.ipAddress = inIP.value;
//       }
//     }else{
//       output2.innerHTML='';
//       output2.innerHTML = 'Drucker konnte nicht gefunden werden';
//       return false;
//     }
//   }
// };


const sw = new Switch('SW1', 4);

sw.connectPrinter('p1', 'FA-FA-FA-FA-FA-FA','10.10.10.10',1000, 'InkJet', true, 400);
console.log(sw.freePorts);
sw.connectPrinter('p2', generateMAC(),'10.10.10.11',1000, 'InkJet', true, 400);
console.log(sw.freePorts);
sw.connectPrinter('p3', generateMAC(),'10.10.10.12',1000, 'InkJet', true, 400);
console.log(sw.freePorts);
sw.connectPrinter('p4', generateMAC(),'10.10.10.13',1000, 'InkJet', true, 400);
console.log(sw.freePorts);
sw.connectPrinter('p5', generateMAC(),'10.10.10.14',1000, 'InkJet', true, 400);
console.log(sw.printers);
console.log(sw.freePorts);
sw.removePrinter('FA-FA-FA-FA-FA-FA');
console.log(sw.printers);
console.log(sw.freePorts);

for(let printer of sw.printers.values()){
  printer.printPages(10);
}

sw.fillPrinters();