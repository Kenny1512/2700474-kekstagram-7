import {messages, names, descriptions} from './data.js';

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

export {getRandomInt, getUniqueID, createComment, getComments, createPhotoDescription, generatePhotos};
