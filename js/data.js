import {getRandomInt, getRandomElementArr, makeUniqueRandomIntegerGenerator} from './util.js';

const PHOTOS_COUNT = 25;

const Likes = {
  MIN: 25,
  MAX: 200,
};

const AvatarsIndex = {
  FIRST: 1,
  LAST: 6,
};

const Comments = {
  MIN: 1,
  MAX: 10,
};

const descriptions = [
  'вид на пляж',
  'go to the beach',
  'голубое море',
  'неплохая девушка',
  'человечки из риса',
  'спорткар',
  'клубника на завтрак',
  'клюквенный морс',
  'самолёт на пляже',
  'полка для обуви',
  'поле за забором',
  'ауди RS',
  'овощной салат',
  'бутербродный котейка',
  'мега ботинки',
  'с высоты полёта',
  'хор',
  'ретро автомобиль',
  'домашние тапочки',
  'пальмы',
  'завтрак',
  'море и закат',
  'краб',
  'вечеринка',
  'офроад и бегемот',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  ' Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = ['Артём', 'Санёк', 'Диман', 'Вован', 'Дэн'];

const getUniqueRandomInt = makeUniqueRandomIntegerGenerator(1,999);

const photos = [];

const getComments = () => {
  const comments = [];
  for (let i = 0; i < getRandomInt(Comments.MIN, Comments.MAX); i++) {
    comments.push({
      id: getUniqueRandomInt(),
      avatar:
        'img/avatar-' +
        getRandomInt(AvatarsIndex.FIRST, AvatarsIndex.LAST) +
        '.svg',
      message: getRandomElementArr(messages),
      autorName: getRandomElementArr(names),
    });
  }
  return comments;
};


const addPhotos = () => {
  for (let i = 0; i < PHOTOS_COUNT; i++) {
    photos.push({
      id: i,
      url: '../photos/'+ (i+1) + '.jpg',
      description: descriptions[i],
      likes: getRandomInt(Likes.MIN, Likes.MAX),
      comments: getComments(),
    });
  }
};
addPhotos();


export default photos;
