export const ImageGalleryItem = ({ listImage }) => {
  return (
    <div>
      <img src={listImage.webformatURL} />
    </div>
  );
};
