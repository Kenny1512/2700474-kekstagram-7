/* eslint-disable no-unused-vars */
import {messages, names, descriptions} from './data.js';
import './functions.js';
import {getRandomInt, getUniqueID, createComment, getComments, createPhotoDescription, generatePhotos} from './functions.js';
import { renderThumbnails } from './thumbnails.js';

const photos = generatePhotos();
renderThumbnails(photos);

const photosData = generatePhotos(25);
// eslint-disable-next-line no-console
console.log(photosData);
