//Button Component
import React from 'react'
import styled from 'styled-components'


//Styled Components
const Button = styled.button`
    border: 0;
    border-radius: 10px;
    padding: 1%;
    width: 50%;
    color: '#fff';
    font-weight: 500;
    font-size: 1.5rem;
    background-color: '#6b1c1c';

    &:hover {
        transition: 0.25s ease-in-out;
        box-shadow: 2px 2px 20px #000;
    }
    transition: 0.25s ease-in-out;
`; 





export default function Character(props) {
    //Destructure Props
    const { onClick } = props

    return (
        <Button onClick={onClick}>Fetch Characters</Button>
    );
}