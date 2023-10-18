
export const ImageGallery = ({listImages}) => {
    return     <ul>
{listImages.map(listImage => (
<li key={listImage.hits.id}>
<img src={listImage.hits.pageURL}/>
</li>)}
</ul>}