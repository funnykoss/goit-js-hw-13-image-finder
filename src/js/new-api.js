const API__KEY = '6175642-0178aa6b85454b63af0eb865e';
const BASE__URL = 'https://pixabay.com/api/';
export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchPhoto() {
    if (this.searchQuery.trim() === '') {
      return;
    }

    const url = `${BASE__URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API__KEY}`;
    return fetch(url)
      .then(r => {
        return r.json();
      })
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
