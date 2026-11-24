import { generatePhotos } from './functions.js';
import { renderThumbnails } from './thumbnails.js';

const photos = generatePhotos(25);
renderThumbnails(photos);
