//Character Component
import React from 'react'
import styled from 'styled-components'


//Styled Components
const CharacterContainer = styled.div`
    width: 80%;
`; 





export default function Character(props) {
    //Destructure Props
    const {} = props

    return (
        <CharacterContainer>
            This is a character
        </CharacterContainer>
    );
}