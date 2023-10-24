import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { fetchImages } from 'api';

export class App extends Component {
  state = {
    galleryItems: [],
    error: false,
    query: '',
    page: 1,
    isLastPage: false,
  };

  async componentDidUpdate(prevState) {
    if (this.state.query !== '') {
      const gallery = await fetchImages(this.state.page, this.state.query);
      this.setState({ galleryItems: gallery.hits });
      console.log(gallery);
    }
  }

  handleSearchSubmit = query => {
    if (this.state.query === query) {
      return;
    }
    this.setState({
      query: query,
      page: 1,
      galleryItems: [],
      error: null,
      isLastPage: false,
    });
  };

  getVisibImages = () => {
    return this.state.galleryItems.filter(item =>
      item.tags.toLowerCase().includes(this.state.query.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery listImages={this.state.galleryItems} />
        <Modal />
        <Button />
        <Loader />
      </div>
    );
  }
}
