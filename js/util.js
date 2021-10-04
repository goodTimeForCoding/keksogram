// случайное число
const getRandomInt = (min, max) => {
  if (min < 0 || max < 0 || min > max || min === max) {
    return -1;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};


//проверка длины строки
const checkString = (text, count) => {
  return text.length <= count;
};


//случайный элемент массива
const getRandomElementArr = (array) => {
  return array[getRandomInt(0, array.length - 1)]
}


//случайное неповторяющееся число(используем замыкание)
const makeUniqueRandomIntegerGenerator = (min, max) => {
  const numArr= [];
  return () => {
    let currentValue = getRandomInt(min, max);
    if (numArr.length >= (max - min + 1)) {
      throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    }
    while (numArr.includes(currentValue)) {
      currentValue = getRandomInt(min, max);
    }
    numArr.push(currentValue);
    return currentValue;
  };
};

//закрываем окно принажатии ESC
const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};


export {getRandomInt, checkString, getRandomElementArr, makeUniqueRandomIntegerGenerator, isEscEvent}
