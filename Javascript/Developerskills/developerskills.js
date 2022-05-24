'use strict';
const a = '5';

if (a === 5) console.log(5);

const age = (birthyear) => 2020 - birthyear;

//CODING CHALLENGE1
const test1 = [17, 21, 23];
const printForecast = function (arr) {
  //   for (var i = 0; i <= arr.length; i++) {
  //     if (tempmax > arr[i]) {
  //       tempmax = arr[i];
  //     }
  //   }
  let str = '';
  for (let i = 0; i < test1.length; i++)
    str = str + `...${test1[i]}0C in ${i + 1} days...`;
  console.log(str);
};
printForecast(test1);
