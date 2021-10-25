const ALERT_SHOW_TIME = 5000;

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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

// таймаут запроса
const DEBOUNCE_INTERVAL = 500

const debounce = (cb) => {
  let lastTimeout = null;

  return (...args) => {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(() => {
      cb(...args);
    }, DEBOUNCE_INTERVAL);
  };
};

// перемешиваем массив
const shuffleArray = (arr) => {
  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

export {getRandomInt, checkString, getRandomElementArr, makeUniqueRandomIntegerGenerator, isEscEvent, showAlert, debounce, shuffleArray}
