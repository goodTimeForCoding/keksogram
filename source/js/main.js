import './redaction.js';
import './effect.js';
import './slider.js';
import './validation.js';
import {addErrorMessage,addSuccessMessage, setpostFormSubmit, getData} from './fetch.js';
import {onOverlayImgCloseClick} from './redaction.js';
import {addMiniPhotos} from './preview.js';
import {shuffleArray, debounce} from './util.js';

const DEFAULT_PREVIEW_LOAD = 25;
const RANDOM_PREVIEW_LOAD = 10;

let photos = [];

const removeActiveClass = () => {
  let activeFilter = document.querySelector('.img-filters__button--active');
  activeFilter.classList.remove('img-filters__button--active');
}

const removePhotos = () => {
  const images = document.querySelectorAll('.picture');
  if (images) {
    images.forEach(element => {
      element.remove();
    });
  }
}

const filters = {
  'filter-default': () => {
    addMiniPhotos(photos.slice(0, DEFAULT_PREVIEW_LOAD))
  },
  'filter-random': () => {
    addMiniPhotos(shuffleArray(photos.slice()).slice(0, RANDOM_PREVIEW_LOAD));

  },
  'filter-discussed': () => {
    addMiniPhotos(photos.slice().sort((a, b) => {
      return b.comments.length - a.comments.length;
    }))
  },
}

export const copyData = (data) => {
  photos = data.slice();
}

const filter = document.querySelector('.img-filters');
export const addFiltersBlock = () => {
  filter.classList.remove('img-filters--inactive');
}

setpostFormSubmit(onOverlayImgCloseClick,addErrorMessage, addSuccessMessage);
getData(addMiniPhotos, copyData, addFiltersBlock);


const onFilterClick = debounce((evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    removeActiveClass();
    removePhotos();
    evt.target.classList.add('img-filters__button--active');
    filters[evt.target.id]();
  }
});

filter.addEventListener('mousedown', onFilterClick);
