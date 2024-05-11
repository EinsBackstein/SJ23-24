/*
Project: uebung23_automated_testing_with_mocha_5
Author:  nottj
Date: 07.05.2024
*/

'use strict';

const out1 = document.getElementById('out1');
// step2
// step 5
function myPow(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
out1.innerHTML = myPow(2, 3);

