//Homeworld Component
import React from 'react'
import styled, { keyframes} from 'styled-components'

const fadeIn = keyframes`
    100% {
        opacity: 1;
    }

`;

//Styled Components
const HomeworldContainer = styled.div`
    opacity: 0;
    animation: ${fadeIn} 0.75s ease-in-out forwards;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 80%;
    margin: 4% 0;
    border-radius: 10px;
    border: 1px solid #000;
    background-color: #6b1c1c;
    color: #fff;
    box-shadow: 5px 5px 40px #000;
`; 

const Title = styled.div`
    max-width: 100%;
    background-color: #e3e3e3;
    border-radius: 10px 10px 0 0 ;    
    margin-bottom: 2%;
    padding: 2%; 
    font-size: 2rem;
    font-weight: 700;
    color: #6b1c1c;
    text-shadow: 1px 2px 2px #fff;

    &:hover {
        transition: 0.25s ease-in-out;
        text-shadow: 1px 2px 2px #000;
    }
    transition: 0.25s ease-in-out;
`;


const Details = styled.section`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-content: space-between;
    margin-bottom: 4% 0;
    padding: 4%; 
    font-size: 1.5rem;
    text-shadow: 1px 1px 4px #000;

    div {
        margin: 1%;
    }
`;




export default function Homeworld(props) {
    //Destructure Props
    const { data } = props
    return (
        <HomeworldContainer>
                <div>Homeworld: {data["homeworld"]}</div>       
        </HomeworldContainer>
    );
}

