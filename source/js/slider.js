import noUiSlider from 'noUiSlider';
import 'noUiSlider/dist/nouislider.css';


const DEFAULT_EFFECT_LEVEL = 100;


const SliderValue = {
  MAX: 100,
  MIN: 0,
  STEP: 1,
}

const effectLevel = document.querySelector('.effect-level');
const slider = effectLevel.querySelector('.effect-level__slider');
let effectLevelValue = effectLevel.querySelector('.effect-level__value');


noUiSlider.create(slider, {
  range: {
    min: SliderValue.MIN,
    max: SliderValue.MAX,
  },
  start: SliderValue.MAX,
  step: SliderValue.STEP,
  connect: 'lower',
});

export {DEFAULT_EFFECT_LEVEL, effectLevel, slider, effectLevelValue}
