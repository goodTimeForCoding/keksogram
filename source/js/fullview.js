import {isEscEvent} from './util.js';


const bigPicture = document.querySelector('.big-picture');
const commentLoaderButton = bigPicture.querySelector('.social__comments-loader');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
export const body = document.querySelector('body');
const crossBtn = bigPicture.querySelector('#picture-cancel');
const commentsList = bigPicture.querySelector('.social__comments');

//создаём шаблон комментария, наполняем контентом
const addComment = (comment) => {
  const commentTemp = document.createElement('li');
  commentTemp.classList.add('social__comment');
  commentTemp.innerHTML = '<img class = "social__picture" src="" alt="" width="35" height="35"> <p class="social__text"></p>';
  const userComment = commentTemp.cloneNode(true);
  userComment.querySelector('.social__picture').src = comment.avatar;
  userComment.querySelector('.social__picture').alt = comment.name;
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

/*удаляем обработчики по вызову*/
const onBigPictureCloseClick = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  crossBtn.removeEventListener('click', onBigPictureCloseClick);
  commentsList.innerHTML = '';
  commentLoaderButton.classList.remove('hidden');
  socialCommentCount.classList.remove('hidden');
}

const onBigPictureEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    onBigPictureCloseClick();
    document.removeEventListener('keydown', onBigPictureEscKeydown);
  }
}

const commentHidden = () => {
  const AllComments = commentsList.querySelectorAll('.social__comment');
  if (AllComments.length > 5) {
    for (let i = 5; i < AllComments.length; i++) {
      AllComments[i].classList.add('hidden');
    }
    commentsLoad(AllComments);
  } else {
    commentLoaderButton.classList.add('hidden');
    socialCommentCount.classList.add('hidden');
  }
};

const commentsLoad = (Comments) => {
  commentLoaderButton.addEventListener('click', () => {
    commentLoaderButton.classList.add('hidden');
    socialCommentCount.classList.add('hidden');
    Comments.forEach((element, index) => {
      if (index >= 5)
        element.classList.remove('hidden');
    });
  })
};


const show = (datum) => {
  body.classList.add('modal-open');
  bigPicture.querySelector('.big-picture__img > img').src = datum.url;
  bigPicture.querySelector('.likes-count').textContent = datum.likes;
  bigPicture.querySelector('.comments-count').textContent = datum.comments.length;
  bigPicture.querySelector('.social__caption').textContent = datum.description;
  crossBtn.addEventListener('click', onBigPictureCloseClick);
  document.addEventListener('keydown', onBigPictureEscKeydown);
  addComments(datum.comments);
  commentHidden();
  bigPicture.classList.remove('hidden');
}

export {show};
