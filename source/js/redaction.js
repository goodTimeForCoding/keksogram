import {body} from './fullview.js';
import {isEscEvent} from './util.js';
import {scaleSmaller, scaleBigger, OnSmallerButtonClick, OnBiggerButtonClick} from './scale.js';
import {effectLevel, slider, DEFAULT_EFFECT_LEVEL} from './slider.js';
import {addUserFoto} from './user-foto.js';



const overlayImg = document.querySelector('.img-upload__overlay');
const fileForm = document.querySelector('#upload-file');
const postForm = document.querySelector('.img-upload__form')
const hashtagInput = postForm.querySelector('.text__hashtags');
const textDescription = postForm.querySelector('.text__description');
const crossBtn = document.querySelector('#upload-cancel');
const imgUploadPreviewImage = document.querySelector('.img-upload__preview > img');
const effectNone = document.querySelector('#effect-none');


const onOverlayImgCloseClick = () => {
  overlayImg.classList.add('hidden');
  body.classList.remove('modal-open');
  crossBtn.removeEventListener('click', onOverlayImgCloseClick);
  fileForm.value = '';
  hashtagInput.value = '';
  textDescription.value = '';
  effectNone.checked = true;
  imgUploadPreviewImage.className = '';
  scaleSmaller.removeEventListener('click', OnSmallerButtonClick);
  scaleBigger.removeEventListener('click', OnBiggerButtonClick);
  document.removeEventListener('keydown', onOverlayImgEscKeydown);
  slider.noUiSlider.set(DEFAULT_EFFECT_LEVEL);
}

const onOverlayImgEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    onOverlayImgCloseClick();
  }
}

const onFileFormChange = () => {
  addUserFoto(fileForm, imgUploadPreviewImage);
  body.classList.add('modal-open');
  crossBtn.addEventListener('click', onOverlayImgCloseClick);
  document.addEventListener('keydown', onOverlayImgEscKeydown);
  imgUploadPreviewImage.style = 'transform: scale(1)';
  scaleSmaller.addEventListener('click', OnSmallerButtonClick);
  scaleBigger.addEventListener('click', OnBiggerButtonClick);
  effectLevel.classList.add('hidden');
  overlayImg.classList.remove('hidden');
};

fileForm.addEventListener ('change', onFileFormChange);


export {onOverlayImgEscKeydown, onOverlayImgCloseClick, imgUploadPreviewImage, textDescription, hashtagInput, postForm}
