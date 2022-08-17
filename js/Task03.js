'use strict';



const checkRandomNumber2 = (item, n, m, str) => {
  const arr = [];
  while (arr.length !== item) {
    let x = Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m);
    if ((str === 'even') && (x % 2 === 0 )) {
      arr.push(x);
    }
    if ((str === 'odd') && (x % 2 !== 0 )) {
      arr.push(x);
    }
  }
  return arr;
}

// const arrNumber = [10, 12, 34, 25, 67, 89, 80, 54, 65, 76, 100];
//
// const checkEven = (arr) => {
//   return arr.filter((item) => item % 2 === 0);
// }
//
// const checkOdd = (arr) => {
//   return arr.filter((item) => item % 2 !== 0);
// }
//
// console.log(checkEven(arrNumber));
// console.log(checkOdd(arrNumber));

const checkRandomNumber = (item, n, m, str) => {

  if (str === 'even') {
    return Array(item).fill().map(() => Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m)).filter((num) => num % 2 ===0);
  }

  if (str === 'odd') {
    return Array(item).fill().map(() => Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m)).filter((num) => num % 2 !==0);
  }
}

console.log('while even', checkRandomNumber2(10, 1, -5, 'even'));
console.log('while odd', checkRandomNumber2(10, -1, 9, 'odd'));

console.log('even', checkRandomNumber(10, 1, -7, 'even'));
console.log('odd', checkRandomNumber(10, 20, 9, 'odd'));
