// import photos from './data.js'; это использовалось в функции addMiniPhotos в качестве параметра
import {show} from './fullview.js';


const userPostTemp = document.querySelector('#picture').content.querySelector('.picture');
const postsContainer = document.querySelector('.pictures');

const addItem = (datum) => {
  const userPost = userPostTemp.cloneNode(true);
  userPost.querySelector('.picture__img').src = datum.url;
  userPost.querySelector('.picture__comments').textContent = datum.comments.length;
  userPost.querySelector('.picture__likes').textContent = datum.likes;
  /*при клике на миниатюры вызываем полную информацию по фото*/
  userPost.addEventListener('click', (evt) => {
    evt.preventDefault();
    show(datum);
  });

  return userPost;
}

const addMiniPhotos = (items) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < items.length; i++) {
    const photosItem = addItem(items[i]);
    fragment.appendChild(photosItem);
  }
  postsContainer.appendChild(fragment);
}


export {addMiniPhotos};
