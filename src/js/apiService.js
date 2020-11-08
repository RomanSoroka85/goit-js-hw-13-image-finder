export default {
  query: 'css',
  page: 1,
  apiKey: '18862670-b1698d422e60fbfd1dac31137',

  async toGetFeatch() {
  let url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.apiKey}`;
  let response = await fetch(url);
  let result = await response.json();
  console.log(result.hits);
  return result.hits;
  },

  setPage() {
    this.page += 1;
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.apiKey}`;
  },
  resetPage() {
    this.page = 1;
  },
};
