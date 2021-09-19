'use strict';
const getRandomInt = (min, max) => {
  if (min < 0 || max < 0 || min > max || min === max) {
    return -1 ;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};


const checkString =  (text, count) => {
  return text.length <= count;
};

