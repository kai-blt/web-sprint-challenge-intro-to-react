//Warning Component
import React from 'react'
import styled from 'styled-components'


//Styled Components
const WarningContainer = styled.div`
    width: 80%;
`; 





export default function Character(props) {
    //Destructure Props
    const {} = props

    return (
        <WarningContainer>
            We're sorry, we couldn't find any Star Wars Characters by that name. Please try again!
        </WarningContainer>
    );
}