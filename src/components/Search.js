//Button Component
import React from 'react'
import styled from 'styled-components'


//Styled Components
const SearchBar = styled.input`
    border-radius: 10px;
    padding: 5%;
    ${props => type="text"}
`; 





function SearchBar(props) {
    //Destructure Props
    const {} = props

    return (
        <SearchBar></SearchBar>
    );
}