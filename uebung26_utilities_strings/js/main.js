/*
Project: uebung26_utilities_strings
Author:  nottj
Date: 21.05.2024
*/

'use strict';

const appName = 'Übung26 Utilities Strings';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

//changes every fourth letter to an uppercase letter, rest is lowercase
let changeLetter = (text) => {
  let newText = '';
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      counter++;
      if (counter % 4 === 0) {
        newText += text[i].toUpperCase();
        continue; // is needed for ending the loop-cycle early | else would lead to buggy code
      }
    }
    newText += text[i].toLowerCase();
  }
  return newText;

};

//forms a string from every third letter of a text
let connectString = (text) => {
  let newString = '';
  let symbols = text.split('');
  for (let i = 2; i < symbols.length; i += 3) {
    newString += symbols[i];
  }
  return newString;
};

//counts, how often a pattern is in a text
let stringCounter = (text, subText) => {
  let count = 0;
  let position = text.indexOf(subText);
  while (position !== -1) {
    count++;
    position = text.indexOf(subText, position + 1);
  }
  return count;
};

//counts palindromes in a text
let palindromeCounter = (text) => {
  let words = text.split(' ');
  let palindromes = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 1 && word.charAt(0).toLowerCase() === word.charAt(word.length - 1).toLowerCase()) {
      palindromes.push(word);
    }
  }

  return palindromes;
};

console.log(changeLetter('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'));

console.log(connectString('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'));

console.log(stringCounter('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', 'em'));

console.log(palindromeCounter('Lorem ipsum dolor sit amet, consetetur test sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'));