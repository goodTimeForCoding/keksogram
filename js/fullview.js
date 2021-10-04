import {isEscEvent} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const crossBtn = bigPicture.querySelector('#picture-cancel');

//временно скрываем
const socialComment = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
socialComment.classList.add('hidden');
commentsLoader.classList.add('hidden');


//функция вывода комментариев
const commentsList = bigPicture.querySelector('.social__comments');

//создаём шаблон комментария, наполняем контентом
const addComment = (comment) => {
  const commentTemp = document.createElement('li');
  commentTemp.classList.add('social__comment');
  commentTemp.innerHTML = '<img class = "social__picture" src="" alt="" width="35" height="35"> <p class="social__text"></p>';
  const userComment = commentTemp.cloneNode(true);
  userComment.querySelector('.social__picture').src = comment.avatar;
  userComment.querySelector('.social__picture').alt = comment.autorName;
  userComment.querySelector('.social__text').textContent = comment.message;
  return userComment;
}

//вызываем готовый комментарий и вставляем в commentsList, при каждом проходе
const addComments = (comments) => {
  let commentsListFragment = document.createDocumentFragment();

  comments.forEach (comment => {
    commentsListFragment.appendChild(addComment(comment));
  });
  commentsList.appendChild(commentsListFragment);
}

const onBigPictureCloseClick = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  commentsList.innerHTML = '';
}


const show = (datum) => {
  body.classList.add('modal-open');
  bigPicture.querySelector('.big-picture__img > img').src = datum.url;
  bigPicture.querySelector('.likes-count').textContent = datum.likes;
  bigPicture.querySelector('.comments-count').textContent = datum.comments.length;
  bigPicture.querySelector('.social__caption').textContent = datum.description;

  crossBtn.addEventListener('click', onBigPictureCloseClick);

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      onBigPictureCloseClick();
    }
  });
  addComments(datum.comments);
  bigPicture.classList.remove('hidden');
}

export {show};
