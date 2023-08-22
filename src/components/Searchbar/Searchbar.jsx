import { Header, SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchFormInput } from "components/Searchbar/Searchbar.styled";
import {GrSearch} from "react-icons/gr"

const Searchbar = ({onSubmit}) => {
  return (
   <Header>
      <SearchForm  onSubmit={onSubmit}>
        <SearchFormBtn type="submit" >         
          <SearchFormBtnLabel >
            <GrSearch/>
          </SearchFormBtnLabel>
        </SearchFormBtn>
        <SearchFormInput   
          name="query"           
          type="text"              
          placeholder="Search images and photos"
        />         
      </SearchForm>
    </Header> 
  )
};

export default Searchbar;
