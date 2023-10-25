import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem'
import { Gallery } from './ImageGallery.styled';
export const ImageGallery = ({ listImages }) => {
  return (
    <Gallery>
      {listImages.map(listImage => (
        <ImageGalleryItem key={listImage.id} listImage={listImage} />
      ))}
    </Gallery>
  );
};
