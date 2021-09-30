import photos from './data.js';

const userPostTemp = document.querySelector('#picture').content.querySelector('.picture');
const postsContainer = document.querySelector('.pictures');


const addItem = (datum) => {
  const userPost = userPostTemp.cloneNode(true);
  userPost.querySelector('.picture_img').src = photos[1].url;
  userPost.querySelector('.picture__comments').textContent = datum.comments.length;
  userPost.querySelector('.picture__likes').textContent = datum.likes;
  return userPost;
}

const addMiniPhotos = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < photos.length; i++) {
    const photosItem = addItem(photos[i]);
    fragment.appendChild(photosItem);
  }
  postsContainer.appendChild(fragment);
}


export {addMiniPhotos};
