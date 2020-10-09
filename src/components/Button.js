//Button Component
import React from 'react'
import styled from 'styled-components'


//Styled Components
const Button = styled.button`
    border-radius: 10px;
    padding: 5%;
    color: '#fff';
    background-color: '#6b1c1c';
`; 





export default function Character(props) {
    //Destructure Props
    const {} = props

    return (
        <Button>
            Fetch Characters
        </Button>
    );
}