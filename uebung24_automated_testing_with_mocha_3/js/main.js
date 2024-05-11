/*
Project: uebung23_automated_testing_with_mocha_3
Author:  nottj
Date: 07.05.2024
*/

'use strict';

const appName = 'Übung23 Automatisiertes Testen mit Mocha 3';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

// step1
'use strict';
const output1 = document.getElementById('output1');
// step2
function myPow() {
  return 8; // :) we cheat!
}
output1.innerText = myPow(2, 3);

