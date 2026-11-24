const COMMENTS_PER_PORTION = 5;

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImgElement = bigPictureElement.querySelector('.big-picture__img img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const socialCommentsElement = bigPictureElement.querySelector('.social__comments');
const socialCaptionElement = bigPictureElement.querySelector('.social__caption');
const commentCountBlockElement = bigPictureElement.querySelector('.social__comment-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const closeButtonElement = bigPictureElement.querySelector('.big-picture__cancel');

let commentsShown = 0;
let currentComments = [];

const createCommentElement = ({ avatar, name, message }) => {
  const commentItem = document.createElement('li');
  commentItem.classList.add('social__comment');

  const commentImg = document.createElement('img');
  commentImg.classList.add('social__picture');
  commentImg.src = avatar;
  commentImg.alt = name;
  commentImg.width = 35;
  commentImg.height = 35;

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = message;

  commentItem.append(commentImg, commentText);
  return commentItem;
};

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= currentComments.length) {
    commentsLoaderElement.classList.add('hidden');
    commentsShown = currentComments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const comment = createCommentElement(currentComments[i]);
    fragment.append(comment);
  }

  socialCommentsElement.innerHTML = '';
  socialCommentsElement.append(fragment);
  commentCountBlockElement.innerHTML = `${commentsShown} из <span class="comments-count">${currentComments.length}</span> комментариев`;
};

const onCommentsLoaderClick = () => {
  renderComments();
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

function closeBigPicture() {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsShown = 0;
}

const onCloseButtonClick = () => {
  closeBigPicture();
};

const openBigPicture = (photoData) => {
  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImgElement.src = photoData.url;
  bigPictureImgElement.alt = photoData.description;
  likesCountElement.textContent = photoData.likes;
  socialCaptionElement.textContent = photoData.description;

  commentCountBlockElement.classList.remove('hidden');

  currentComments = photoData.comments;
  commentsShown = 0;
  renderComments();

  document.addEventListener('keydown', onDocumentKeydown);
};

closeButtonElement.addEventListener('click', onCloseButtonClick);
commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);

export { openBigPicture };
