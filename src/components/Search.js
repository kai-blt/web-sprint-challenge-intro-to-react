//Button Component
import React from 'react'
import styled from 'styled-components'
import Button from './Button'

//Styled Components
const SearchBar = styled.input`
    width: 80%;
    border-radius: 5px;
    border: 1px solid #000;
    padding: 2%;
    margin: 2%;
    box-shadow: inset 2px 2px 5px #000;
`; 


export default function Search(props) {
    //Destructure Props
    const { type, onChange } = props

    return (
        <SearchBar type={type} onChange={onChange}></SearchBar>
    );
}