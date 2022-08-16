'use strict';

const checkRandomNumber = (item, n, m) =>  Array(item).fill().map(() => Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m));

console.log(checkRandomNumber(10, 1, 15));
console.log(checkRandomNumber(5, 5, 1));
console.log(checkRandomNumber(8, 6, -5));
