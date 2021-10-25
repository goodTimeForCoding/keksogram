import {imgUploadPreviewImage} from './redaction.js';
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValueToServer = document.querySelector('.scale-value-to-server');
const scaleValue = document.querySelector('.scale__control--value');


const OnSmallerButtonClick = () => {
  if (scaleValue.value === '100%') {
    scaleValue.value = '75%';
    scaleValueToServer.value =  scaleValue.value;
    imgUploadPreviewImage.style = 'transform: scale(0.75)';
  } else if (scaleValue.value === '75%') {
    scaleValue.value = '50%';
    scaleValueToServer.value =  scaleValue.value;
    imgUploadPreviewImage.style = 'transform: scale(0.5)';
  } else if (scaleValue.value === '50%') {
    scaleValue.value = '25%';
    scaleValueToServer.value =  scaleValue.value;
    imgUploadPreviewImage.style = 'transform: scale(0.25)';
  }
}

const OnBiggerButtonClick = () => {
  if (scaleValue.value === '25%') {
    scaleValue.value = '50%';
    scaleValueToServer.value =  scaleValue.value;
    imgUploadPreviewImage.style = 'transform: scale(0.5)';
  } else if (scaleValue.value === '50%') {
    scaleValue.value = '75%';
    scaleValueToServer.value =  scaleValue.value;
    imgUploadPreviewImage.style = 'transform: scale(0.75)';
  } else if (scaleValue.value === '75%') {
    scaleValue.value = '100%';
    scaleValueToServer.value =  scaleValue.value;
    imgUploadPreviewImage.style = 'transform: scale(1)';
  }
}


export {OnSmallerButtonClick, OnBiggerButtonClick, scaleSmaller, scaleBigger}
