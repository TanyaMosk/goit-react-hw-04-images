import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { fetchImages } from "services/api";
import { GlobalStyle } from "./GlobalStyle";
import { Container, Text } from "./App.styled";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component{
  state = {
    query: '',    
    images: [],
    page: 1,
    loading: false,
    noResults: false,
  }   
  
  async componentDidUpdate(prevProps, prevState) { 
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;   

    if (prevQuery !== nextQuery || prevState.page !== this.state.page) {     

      this.setState({ loading: true });    
      
      const newQuery = nextQuery.slice(nextQuery.indexOf('/') + 1);   

    try{
      const images = await fetchImages(newQuery, this.state.page);
       
      if(images.hits.length === 0){
        this.setState({
          noResults: true,
          loading: false,
        })        
        return;
      };
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          noResults: false,
        }));
       
    } catch(error) {
        toast.error("Oops, something went wrong 🥺. Please try reloading the page!");
        }
        this.setState({ loading: false });         
    };      
  }

  changeQuery = (newQuery) => {
    this.setState({     
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
    
   };

  setImage = (evt) => {
    evt.preventDefault()
    const queryValue = evt.target.elements.query.value.trim();

    if (queryValue === '') {      
      toast.info('🦄 Please fill in the field!');
      this.setState({
        images:[],
      })
      return;
   };    
   
    if (queryValue !== '') {
       this.changeQuery(queryValue) 
        evt.target.reset()  
        return;
    }      
   };

  handleLoadMore = () => { 
    this.setState(prevState => ({ page: prevState.page + 1 })); 
    this.setState({ loading: true });  
  };  

  render() {    
    const { loading, images, noResults } = this.state;
    return (
    <Container>
        <Searchbar onSubmit={this.setImage} />  

         {noResults ? 
         (<Text>Sorry, there are no images matching your search query. Please try again!🥺</Text>)
         :(<ImageGallery images={images} />)}  

        {loading && <Loader/>}

        {images.length !== 0  && <Button onClick={this.handleLoadMore} />}   

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
}     
  
