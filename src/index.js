import './styles.css';
import apiService from './js/apiService';
import refs from './js/refs';
import debounce from 'lodash.debounce';
import templateGallery from './templates/templateGallery.hbs';
import "@babel/polyfill";

apiService.toGetFeatch();

refs.search.addEventListener(
  'input',
  debounce(e => {
    apiService.resetPage();
    if (e.target.value === '') {
      refs.gallery.innerHTML = '';
    return;
    }
    apiService.query = e.target.value;
    apiService
      .toGetFeatch()
      .then(data => (refs.gallery.innerHTML = templateGallery(data)));
  }, 500),
);

refs.loadMoreBtn.addEventListener('click', () => {
  apiService.setPage();
  autoScroll();
  apiService
    .toGetFeatch()
    .then(data =>
      refs.gallery.insertAdjacentHTML('beforeend', templateGallery(data)),
    );
});

function autoScroll() {
  let scrollHeight =
    Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    ) - document.documentElement.clientHeight;
  setTimeout(() => {
    window.scrollTo({
      top: scrollHeight,
      behavior: 'smooth',
    });
  }, 500);
}
