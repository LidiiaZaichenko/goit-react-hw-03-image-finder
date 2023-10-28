import { ModalItem } from 'components/Modal/Modal';
import { Image, GalleryImage } from './ImageGalleryItem.styled';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    const { listImage } = this.props;
    return (
      <div>
        <GalleryImage onClick={this.openModal}>
          <Image src={listImage.webformatURL} alt={listImage.tags} />
        </GalleryImage>
        <ModalItem listImage={listImage} isCloseModal={this.closeModal} isOpenModal={this.state.modalIsOpen} />
      </div>
    );
  }
}
