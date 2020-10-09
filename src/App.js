import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { BASE_URL } from './constants/constants'
import Search from './components/Search'
import Character from './components/Character'
import Warning from './components/Warning'
import Button from './components/Button'


//Styled Components
const AppContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 80%;
  margin: auto;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;

  h1 {
    color: #FFE81F;
    font-weight: 700;
    font-size: 5rem;
    text-shadow: 1px 1px 5px #000;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 60%;
`;



const App = () => {
  //Store user's search input
  const [search, setSearch] = useState(null);

  //Search Button clicked state
  const [clicked, setClicked] = useState(false);
  
  //Reset Button clicked state
  const [reset, setReset] = useState(false);

  //Store API Data
  const [apiData, setApiData] = useState([]);

  //Make a call to Starwars API to fetch data based on search input
  useEffect(() => {
    const getAllCharacters = () => {
      axios.get(BASE_URL)
        .then(res => {
          setApiData(res.data.results);  
          console.log(res.data.results)      
        })
        .catch(err => {
          setApiData(null);
          console.log(err);
        })
    }    
  getAllCharacters();
  }, [reset]);

  useEffect(() => {
    const getSearchedCharacters = () => {      
      axios.get(`${BASE_URL}?search=${search}`)
        .then(res => {
          setApiData(res.data.results);     
          console.log(res.data.results)      
   
        })
        .catch(err => {
          setApiData(null);
          console.log(err);
        })
    }    
    getSearchedCharacters();
  }, [clicked])



  //Gets user input search value on search box change.
  const getSearchValue = (event) => {
    setSearch(event.target.value);
  }

 
  return (
    <AppContainer>
      <h1>Star Wars Character Finder</h1>
      <SearchContainer>        
        <Search type={'text'} onChange={getSearchValue}></Search>      
        <Button onClick={() =>  setClicked(!clicked)} message={'Search Characters'}></Button> 
        <Button onClick={() =>  setReset(!reset)} message={'Reset'}></Button>           
      </SearchContainer>
      {apiData.map(char =>  <Character data={char} />)}
    </AppContainer>
  );
}

export default App;
