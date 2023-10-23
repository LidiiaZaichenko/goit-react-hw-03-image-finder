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

  // componentDidUpdate(_prevProps, prevState) {
  //   if (prevState.query !== this.state.query) {
  //     this.setState({ galleryItems: [], page: 1, isLastPage: false }, () => {
  //       fetchImages();
  //     });
  //   }
  // }

  async componentDidUpdate() {
    try {
      const gallery = await fetchImages(this.state.page, this.state.query);
      this.setState({ galleryItems: gallery.hits });
      console.log(gallery);
    } catch (error) {
      this.setState({ error: true });
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
        <ImageGallery listImages={this.getVisibImages()} />
        <Modal />
        <Button />
        <Loader />
      </div>
    );
  }
}
