import generateAll from './framework_at_home.js';

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {
    generateAll(json);
  });

const sil = document.querySelector(
  '.sil-bunu-gecici-github-pages-guncellendi-mi-diye-gormek-icin'
);

sil.innerText = '1';
