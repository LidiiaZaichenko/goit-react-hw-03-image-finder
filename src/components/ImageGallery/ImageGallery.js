
export const ImageGallery = ({listImages}) => {
    return     <ul>
    {listImages.map(listImage => (
      <li key={listImage.id}>
        <img src={listImage.pageURL}/>
      </li>
    ))}
  </ul>
}