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
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  width: 60%;
  flex-flow: row nowrap;
  justify-content: space-between;
`;



const App = () => {
  //Store user's search input
  const [search, setSearch] = useState(null);

  //Store Button clicked state
  const [clicked, setClicked] = useState(false);

  //Store API Data
  const [apiData, setApiData] = useState([]);

  //Make a call to Starwars API to fetch data based on search input
  useEffect(() => {
    axios.get(`${BASE_URL}${search}`)
      .then(res => {
        setApiData(res.data.results);        
      })
      .catch(err => {
        setApiData(null);
        console.log(err);
      })
  }, [clicked]);

  //Gets user input search value on search box change.
  const getSearchValue = (event) => {
    setSearch(event.target.value);
  }

 
  return (
    <AppContainer>
      <h1>Star Wars Character Finder</h1>
      <SearchContainer>        
        <Search type={'text'} onChange={getSearchValue}></Search>      
        <Button onClick={() =>  setClicked(!clicked)}></Button>        
      </SearchContainer>
      {apiData.length > 0 && <Character data={apiData} />}
      {/* {(apiData.length === ) ? <Warning /> : null} */}
    </AppContainer>
  );
}

export default App;
