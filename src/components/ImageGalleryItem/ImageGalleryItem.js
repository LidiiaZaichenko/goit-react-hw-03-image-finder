import {Image} from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ listImage }) => {
  return (
    <div>
      <Image src={listImage.webformatURL} alt ="" />
    </div>
  );
};
