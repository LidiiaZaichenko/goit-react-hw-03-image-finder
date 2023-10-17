import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import {getGallery} from 'api'

export class App extends Component {
  state = {
    galleryItems: [],
    error: false,
  };

  async componentDidMount() {
    try {
      const gallery = await getGallery();
      this.setState({ galleryItems: gallery });
    } catch (error) {
      this.setState({ error: true });
    }
    console.log(getGallery());
  }

  render() {
    const { galleryItems } = this.state;
    return (
      <div>
        <Searchbar />
        <ImageGallery listImages={galleryItems} /> 
        <ImageGalleryItem />
        <Modal />
        <Button />
        <Loader />
      </div>
    );
  }
}
