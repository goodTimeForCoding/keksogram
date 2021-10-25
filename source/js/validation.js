import {hashtagInput, textDescription, onOverlayImgEscKeydown} from './redaction.js';

const MAX_SYMBOLS = 20;
const MAX_HASHTAGS = 5;


textDescription.addEventListener('focus', () => {
  document.removeEventListener('keydown', onOverlayImgEscKeydown);
});

textDescription.addEventListener('blur', () => {
  document.addEventListener('keydown', onOverlayImgEscKeydown);
});

hashtagInput.addEventListener('focus', () => {
  document.removeEventListener('keydown', onOverlayImgEscKeydown);
});

hashtagInput.addEventListener('blur', () => {
  document.addEventListener('keydown', onOverlayImgEscKeydown);
});


hashtagInput.addEventListener('input', () => {
  hashtagInput.setCustomValidity('');
  hashtagInput.style.border = 'none';
  const hashtagText = hashtagInput.value.toLowerCase().trim();
  let inputArray = hashtagText.split(/\s+/);

  const isStartNotHashtag = inputArray.some((item) => {
    return item[0] !== '#';
  });
  if (isStartNotHashtag) {
    hashtagInput.setCustomValidity('Хэш-тег начинается с символа # (решётка)');
  }

  const isOnlyLatticeHashtag = inputArray.some((item) => {
    return item === '#';
  });
  if (isOnlyLatticeHashtag) {
    hashtagInput.setCustomValidity('Хэш-тег не может состоять только из решетки');
  }

  const isSplitSpaceHashtag = inputArray.some((item) => {
    return item.indexOf('#', 1) >= 1;
  });
  if (isSplitSpaceHashtag) {
    hashtagInput.setCustomValidity('Хэш-теги разделяются пробелами');
  }

  if (hashtagText.length > MAX_SYMBOLS) {
    hashtagInput.setCustomValidity('максимальная длина хэш-тега 20 символов');
  }

  if (inputArray.length > MAX_HASHTAGS) {
    hashtagInput.setCustomValidity('Максимум 5 хэш-тегов');
  }

  const isRepeatingHashtag = inputArray.some((item, i, arr) => {
    return arr.indexOf(item, i + 1) >= i + 1;
  });
  if (isRepeatingHashtag) {
    hashtagInput.setCustomValidity('Хэш-теги не должны повторяться');
  }


  const isNotOnlyLetAndNum = inputArray.some((item) => {
    let regex = /[^a-z0-9а-я#]/;
    return regex.test(item);
  });
  if (isNotOnlyLetAndNum) {
    hashtagInput.setCustomValidity('строка после решётки должна состоять из букв и чисел');
  }


  if (!(hashtagInput.checkValidity())) {
    hashtagInput.style.border = '2px solid red';
  } else {
    hashtagInput.style.border = 'none';
  }
});
