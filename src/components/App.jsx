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
  };

  // async componentDidMount() {
  //   try {
  //     const gallery = await fetchImages();
  //     this.setState({ galleryItems: gallery.hits });
  //   } catch (error) {
  //     this.setState({ error: true });
  //   }
  // }

  async componentDidUpdate() {
    try {
      const gallery = await fetchImages(this.state.page,this.state.query);
      this.setState({ galleryItems: gallery.hits });
      console.log(gallery);
    } catch (error) {
      this.setState({ error: true });
    }
  }

  onSubmit = newQuery => {
    this.setState({
      query: newQuery,
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
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery listImages={this.state.galleryItems} />
        <Modal />
        <Button />
        <Loader />
      </div>
    );
  }
}
