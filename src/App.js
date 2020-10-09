import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { BASE_URL } from './constants/constants'
import Search from './components/Search'
import Character from './components/Character'
import Button from './components/Button'


//Styled Components
const AppContainer = styled.div`
  text-align: center;

  h1 {
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
  }
`;



const App = () => {
  //Store user's search input
  const [search, setSearch] = useState(null);

  //Store Button clicked state
  const [clicked, setClicked] = useState(false);

  //Store API Data
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios.get(BASE_URL)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data))
  }, [clicked]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <AppContainer>
      <h1>Star Wars Character Finder</h1>
      <Search></Search>
      <Button></Button>
    </AppContainer>
  );
}

export default App;
