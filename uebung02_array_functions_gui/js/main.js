/*
Project: uebung02_array_functions_gui
Author:  nottj
Date: 26.09.2023
*/

'use strict';

const appName = 'Übung02 Array Functions GUI';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading').innerText = appName;

//gui
//inputs

const inSentence = document.getElementById('sentence_input');
const inLetter = document.getElementById('letter_input');

//buttons

const btnLongestWord = document.getElementById('longest_word');
const btnShortestWord = document.getElementById('shortest_word');
const btnAverageLength = document.getElementById('average_length');
const btnCountLetterWords = document.getElementById('count_letter_words');

//outputs

const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');
const output4 = document.getElementById('output4');


//functions

//This function is here to find the longest word in an array

function getLongestWord(array){
  let longestWord = array[0];
  for(let i = 0; i < array.length; i++){
    if(array[i].length > longestWord.length){
      longestWord = array[i];
    }
  }
  return longestWord;
}

//This function is here to find the shortest word in an array

function getShortestWord(array){
  let shortestWord = array[0];
  for(let i = 0; i < array.length; i++){
    if(shortestWord.length > array[i].length){
      shortestWord = array[i];
    }
  }
  return shortestWord;
}

//This function is here to get an average length for the words in an array

function getAverageLength(array){
  let sum = 0;
  for(let word of array){
    sum += word.length;
  }
  return sum/array.length;
}

//This function is here to count the words in an array

function getWordCounter(array, count){
  let counter = 0;
  for (const word of array){
    if(word.length == count){
      counter++;
    }
  }
  return counter;
}

//main-code

//Event Handling

//If the "btnAverageLength"-button is clicked, the average wordlength is printed out on the screen

btnAverageLength.onclick = function(){
  output3.innerText='';
  let sencenceArray = inSentence.value.split(' ');
  output3.innerText =`Die Wörter im Satz haben durchschnittlich ${getAverageLength(sencenceArray)} Buchstaben`;
};

//If the "btnCountLetterWords"-button is clicked, the number of words with a specific length is printed out

btnCountLetterWords.onclick = function(){
  output4.innerText = '';
  let sencenceArray = inSentence.value.split(' ');
  output4.innerText =`Es gibt ${getWordCounter(sencenceArray, inLetter.value)} Wörter mit ${inLetter.value} Buchstaben`;
};

//If the "btnLongestWord"-button is clicked, the longest word is printed out

btnLongestWord.onclick = function(){
  output1.innerText = '';

  let sencenceArray = inSentence.value.split(' ');
  output1.innerText =`Das längste Wort im Satz ist "${getLongestWord(sencenceArray)}"`;
};

//If the "btnShortestWord"-button is clicked, the shortest word is printed out

btnShortestWord.onclick = function(){
  output2.innerText = '';

  let sencenceArray = inSentence.value.split(' ');
  output2.innerText =`Das kürzeste Wort im Satz ist "${getShortestWord(sencenceArray)}"`;
};