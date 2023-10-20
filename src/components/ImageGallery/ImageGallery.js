import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryImage , Gallery} from './ImageGallery.styled'
export const ImageGallery = ({ listImages }) => {
  return (
    <Gallery>
      {listImages.map(listImage => (
        <GalleryImage key={listImage.id}>
          <ImageGalleryItem listImage={listImage} />
        </GalleryImage>
      ))}
    </Gallery>
  );
};
