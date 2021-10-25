import {imgUploadPreviewImage} from './redaction.js';
import {effectLevelValue, effectLevel} from './slider.js';
import {slider, DEFAULT_EFFECT_LEVEL} from './slider.js';




const EffectClasses = [
  '',
  'effects__preview--chrome',
  'effects__preview--sepia',
  'effects__preview--marvin',
  'effects__preview--phobos',
  'effects__preview--heat',
];

const effectsRadio = document.querySelectorAll('.effects__radio');

// const effects = [
//   'filter: none',
//   `filter: grayscale(${parseInt(effectLevelValue.value, 10) * 0.01})`,
//   `filter: sepia(${parseInt(effectLevelValue.value, 10) * 0.01})`,
//   `filter: invert(${Math.floor(effectLevelValue.value)}%)`,
//   `filter: blur(${(parseInt(effectLevelValue.value, 10) * 3) * 0.01}px)`,
//   `filter: brightness(${(parseInt(effectLevelValue.value, 10) * 3) * 0.01})`,
// ]




const addimgUploadPreviewClasses = (effectRadio, effectClass) => {
  effectRadio.addEventListener('click', () => {
    if (effectClass === '') {
      effectLevel.classList.add('hidden');
      slider.noUiSlider.on('update', (_, handle, unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreviewImage.style.filter = 'none';
      });
    } else if (effectClass === 'effects__preview--chrome') {
      effectLevel.classList.remove('hidden');
      slider.noUiSlider.on('update', (_, handle, unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreviewImage.style.filter = `grayscale(${parseInt(effectLevelValue.value, 10) * 0.01})`;
      });
    } else if (effectClass === 'effects__preview--sepia') {
      effectLevel.classList.remove('hidden');
      slider.noUiSlider.on('update', (_, handle, unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreviewImage.style.filter = `sepia(${parseInt(effectLevelValue.value, 10) * 0.01})`;
      });
    } else if (effectClass === 'effects__preview--marvin') {
      effectLevel.classList.remove('hidden');
      slider.noUiSlider.on('update', (_, handle, unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreviewImage.style.filter = `invert(${Math.floor(effectLevelValue.value)}%)`;
      });
    } else if (effectClass === 'effects__preview--phobos') {
      effectLevel.classList.remove('hidden');
      slider.noUiSlider.on('update', (_, handle, unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreviewImage.style.filter = `blur(${(parseInt(effectLevelValue.value, 10) * 3) * 0.01}px)`;
      });
    } else if (effectClass === 'effects__preview--heat') {
      effectLevel.classList.remove('hidden');
      slider.noUiSlider.on('update', (_, handle, unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreviewImage.style.filter = `brightness(${(parseInt(effectLevelValue.value, 10) * 3) * 0.01})`;
      });
    }
    imgUploadPreviewImage.className = effectClass;
    slider.noUiSlider.set(DEFAULT_EFFECT_LEVEL);
  });
};


for (let i = 0; i < effectsRadio.length; i++) {
  addimgUploadPreviewClasses(effectsRadio[i], EffectClasses[i]);
}
