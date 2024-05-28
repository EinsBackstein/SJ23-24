/*
Project: uebung27_strings_date_2
Author:  nottj
Date: 28.05.2024
*/

'use strict';

const appName = 'Übung27 Strings Date 2';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

function getNetwork(ip, subnet) {
  if (subnet == 8 || subnet == 16 || subnet == 24) {
    let addr = ip.split('.');
    for (let i = 0; i <= 3; i++) {
      if (Number.isInteger(addr[i]) == true && addr[i] >= 0 && addr[i] <= 255) {
        console.log(`Octett ${i} ist gültig`);
      } else {
        throw new Error(`Octett ${i} ist ungültig`);
      }
    }
    if (subnet == 8) {
      return `${addr[0]}.0.0.0`;
    } else if (subnet == 16) {
      return `${addr[0]}.${addr[1]}.0.0`;
    } else if (subnet == 24) {
      return `${addr[0]}.${addr[1]}.${addr[2]}.0`;
    }
  } else {
    throw new Error('Inkorrektes Subnet (entweder 8, 16 oder 24)');
  }
}
