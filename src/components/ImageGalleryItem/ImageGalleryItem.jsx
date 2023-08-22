import  ModalImg  from "components/Modal"
import { GalleryItem, ImageGalleryItemImage } from "./ImageGalleryItem.styled";
import { useState } from "react";

const ImageGalleryItem = ({imgUrl,imgLarge,tags})=>{
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen( true );

    const closeModal = () => setIsModalOpen(false);

    return (   
        <GalleryItem >
          <ImageGalleryItemImage onClick={openModal} src={imgUrl} alt={tags} width="240" />
             <ModalImg
               largeUrl={imgLarge}
               isModalOpen={isModalOpen}
               onClose={closeModal} />
        </GalleryItem>        
        )
}

export default ImageGalleryItem;