import styled from 'styled-components'

export const Header = styled.header`
padding: 10px;
background-color: darkblue;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin: auto;
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 35px;
  height: 35px;
  border: 0;
  padding: 0;  
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: gainsboro;

  &:hover{
    opacity: 1;
    background-color: whitesmoke;    
  }
`;

export const SearchFormBtnLabel = styled.span`  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;;  
  padding: 0;
  overflow: hidden; 
  white-space: nowrap;
  border: 0; 
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  padding: 5px;
  color: darkblue;
  padding-left: 10px;
  padding-right: 4px;
  outline: none;
  border: none;
`;