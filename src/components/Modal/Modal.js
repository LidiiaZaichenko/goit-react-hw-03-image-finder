import Modal from 'react-modal';
import { Component } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class ModalItem extends Component {


  render() {
    const { listImage,isCloseModal,isOpenModal} = this.props;
  
    return (
      <div>
        <Modal
          isOpen={isOpenModal}
          onRequestClose={isCloseModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src={listImage.largeImageURL} alt={listImage.tags} />
        </Modal>
      </div>
    );
  }
}
