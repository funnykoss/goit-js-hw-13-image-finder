const BASE_URL = 'https://pixabay.com/api/';

export default class ImagesApiSevise {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=6175642-0178aa6b85454b63af0eb865e`;

    const response = await fetch(url);
    const images = await response.json();
    this.page += 1;
    return images;
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
