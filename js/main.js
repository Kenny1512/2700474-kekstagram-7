import {messages, names, descriptions} from './data.js';
import './functions.js';
import {getRandomInt, getUniqueID, createComment, getComments, createPhotoDescription, generatePhotos} from './functions.js';

const photosData = generatePhotos(25);
console.log(photosData);
