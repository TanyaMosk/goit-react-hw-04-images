import ImageGalleryItem from "components/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

const ImageGallery = ({images}) => {
  return (
    <Gallery >    
      {images.map(({id, webformatURL, tags, largeImageURL}) => (
        <ImageGalleryItem
          key={id}
          imgUrl={webformatURL}
          imgLarge={largeImageURL}
          tags={tags}
        />
      ))}      
    </Gallery>
  )
};
 
export default ImageGallery;