//Button Component
import React from 'react'
import styled from 'styled-components'
import Button from './Button'

//Styled Components
const SearchBar = styled.input`
    width: 80%;
    border-radius: 10px;
    border: 1px solid #000;
    padding: 2%;
    ${props => props.type="date"}
`; 


export default function Search(props) {
    //Destructure Props
    const { type, onChange } = props

    return (
        <SearchBar type={type} onChange={onChange}></SearchBar>
    );
}