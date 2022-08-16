'use strict';

const checkRandomNumber = (item) =>  Array(item).fill().map(() => Math.round(Math.random() * 100));

console.log(checkRandomNumber(15));
