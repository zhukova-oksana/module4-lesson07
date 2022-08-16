'use strict';



// const checkRandomNumber2 = (item, n, m, str) => {
//   const arr = [];
//   while (arr.length !== item) {
//     let x = Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m);
//     if ((str === 'even') && (x % 2 === 0 )) {
//       arr.push(x);
//     }
//     if ((str === 'odd') && (x % 2 !== 0 )) {
//       arr.push(x);
//     }
//   }
//   return arr;
// }

const checkRandomNumber = (item, n, m, str) => {
  let min = Math.min(n, m);
  let max = Math.max(n, m);

  let maxMin = max - min;

  if (str === 'even') {
    return Array(item).fill().map(() => Math.floor(Math.random() * (maxMin / 2)) * 2);
  }

  if (str === 'odd') {
    return Array(item).fill().map(() => Math.floor(Math.random() * (maxMin / 2)) * 2 + 1);
  }
}

// console.log('even', checkRandomNumber2(10, 1, -5, 'even'));
// console.log('odd', checkRandomNumber2(10, -1, 9, 'odd'));

console.log('even', checkRandomNumber(10, 1, -7, 'even'));
console.log('odd', checkRandomNumber(10, 20, 9, 'odd'));
