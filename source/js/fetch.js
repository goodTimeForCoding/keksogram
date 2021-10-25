import {showAlert} from './util.js';
import {postForm} from './redaction.js';

const successTemp = document.querySelector('#success').content.querySelector('.success');

const addSuccessMessage = () => {
  const successMessage = successTemp.cloneNode(true);
  document.querySelector('body').appendChild(successMessage);

  document.querySelector('.success__button').addEventListener('click', () => {
    document.querySelector('body').removeChild(document.querySelector('.success'));
  });
  document.addEventListener('keydown', () => {
    document.querySelector('body').removeChild(document.querySelector('.success'));
  });
  window.addEventListener('click', (evt) => {
    const target = evt.target
    if (!target.closest('.success__inner')) {
      document.querySelector('body').removeChild(document.querySelector('.success'));
    }
  });
};


const errorTemp = document.querySelector('#error').content.querySelector('.error');

const addErrorMessage = () => {
  const errorMessage = errorTemp.cloneNode(true);
  document.querySelector('body').appendChild(errorMessage);
  document.querySelector('.error__button').addEventListener('click', () => {
    document.querySelector('body').removeChild(document.querySelector('.error'));
  });
  document.addEventListener('keydown', () => {
    document.querySelector('body').removeChild(document.querySelector('.error'));
  });
  window.addEventListener('click', (evt) => {
    const target = evt.target
    if (!target.closest('.error__inner')) {
      document.querySelector('body').removeChild(document.querySelector('.error'));
    }
  });
}

const setpostFormSubmit = (closeImg, addErrMesage, addSucMessage) => {
  postForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
      'https://23.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok){
          closeImg();
          addSucMessage();
        } else {
          closeImg()
          addErrMesage();
        }
      })
      .catch(() => {
        closeImg()
        addErrMesage();
      })
  });
};



const getData = (onSuccess, sliceData, addBlocks) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((posts) => {
      onSuccess(posts);
      sliceData(posts);
      addBlocks();
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные');
    })
}


export {setpostFormSubmit, getData, addSuccessMessage, addErrorMessage}
