import Modal from 'react-modal';
import { ModalImg } from './Modal.styled';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
  content: {
    border: '0px solid rgb(204, 204, 204)',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalItem = ({ listImage, isCloseModal, isOpenModal }) => {

    return (
      <Modal
        isOpen={isOpenModal}
        onRequestClose={isCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalImg src={listImage.largeImageURL} alt={listImage.tags} />
      </Modal>
    );
  }