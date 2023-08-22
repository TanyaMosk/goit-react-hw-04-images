import { ToastContainer, toast } from 'react-toastify';
import { fetchImages } from "services/api";
import { GlobalStyle } from "./GlobalStyle";
import { Container, ImgText, Text } from "./App.styled";
import  noImage  from '../image/noImage.jpg';
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {

    if (query === '') return;

    async function getImages() {

      setLoading(true);

      try {
        const newQuery = query.slice(query.indexOf('/') + 1);
        const images = await fetchImages(newQuery, page);        
       
        if (images.hits.length === 0) {
          setNoResults(true);
          setLoading(false);               
          return;
        };
        setImages(prevState => [...prevState, ...images.hits]);
        setNoResults(false);    
        
      } catch (error) {
        toast.error("Oops, something went wrong 🥺. Please try reloading the page!");

      } finally {
        setLoading(false);
      }      
    }
    getImages() 
  }, [query, page]);

  const changeQuery = (newQuery) => { 
    setQuery(`${Date.now()}/${newQuery}`);
    setImages([]);
    setPage(1);     
  };
  
  const setImage = (evt) => {
    evt.preventDefault()
    const queryValue = evt.target.elements.query.value.trim();

    if (queryValue === '') {      
      toast.info('🦄 Please fill in the field!');
      setImages([]);     
      return;
   };    
   
    if (queryValue !== '') {
       changeQuery(queryValue) 
        evt.target.reset()  
        return;
    }      
  };
  
  const handleLoadMore = () => { 
    setPage(prevState => prevState + 1);
    setLoading(true);   
  };  

  return (
    <Container>
        <Searchbar onSubmit={setImage} />  

         {noResults ? 
        (<>
        <Text>Sorry, there are no images matching your search query. Please try again!🥺</Text>
        <ImgText src={noImage} alt="Oops, no images" /></>)
         :(<ImageGallery images={images} />)}  

        {loading && <Loader/>}

        {images.length !== 0  && <Button onClick={handleLoadMore} />}   

        <GlobalStyle />  
        <ToastContainer
        autoClose={4000}
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </Container>
    )
}