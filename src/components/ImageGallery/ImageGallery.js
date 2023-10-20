import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ listImages }) => {
  return (
    <ul>
      {listImages.map(listImage => (
        <li key={listImage.id}>
          <ImageGalleryItem listImage={listImage} />
        </li>
      ))}
    </ul>
  );
};
