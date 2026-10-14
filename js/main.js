const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = ['Артём', 'Никита', 'Мария', 'Кекс', 'Анна', 'Ольга', 'Дмитрий', 'София'];

const descriptions = [
  'Поймал момент, когда небо горит',
  'Идеальное утро начинается с тишины и кофе',
  'Осень — это не грусть, это золото под ногами',
  'Там, где дышится по-другому',
  'Этот взгляд говорит: «Не буди»',
  'Город не спит, и я тоже',
  'Мои люди, мой мир',
  'Ушёл в лес — не ищите',
  'Вещи, у которых есть история',
  'Работа над собой никогда не выходной'
];

const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getUniqueID = function () {
  let currentID = 0;
  return function () {
    return ++currentID;
  };
};

const nextPhotoId = getUniqueID();
const nextUrlId = getUniqueID();
const nextCommentId = getUniqueID();

const createComment = function () {
  const sentencesCount = getRandomInt(1, 2);
  const commentMessage = [];

  while (commentMessage.length < sentencesCount) {
    const randomComment = messages[getRandomInt(0, messages.length - 1)];

    if (!commentMessage.includes(randomComment)) {
      commentMessage.push(randomComment);
    }
  }
  return commentMessage.join(' ');
};

const getComments = function (amount) {
  const comments = [];

  for (let i = 0; i < amount; i++) {
    const comment = {
      id : nextCommentId(),
      avatar : 'img/avatar-' + getRandomInt(1, 6) + '.svg',
      message : createComment(),
      name : names[getRandomInt(0, names.length - 1)],
    };
    comments.push(comment);
  }

  return comments;
};

const createPhotoDescription = function () {
  return {
    id : nextPhotoId(),
    url : 'photos/' + nextUrlId() + '.jpg',
    description : descriptions[getRandomInt(0, descriptions.length - 1)],
    likes : getRandomInt(15, 200),
    comments : getComments(getRandomInt(0, 30))
  };
};

const generatePhotos = function (count = 25) {
  const photos = [];
  for (let i = 0; i < count; i++) {
    photos.push(createPhotoDescription());
  }
  return photos;
};

const photosData = generatePhotos(25);
console.log(photosData);
