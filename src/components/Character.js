//Character Component
import React from 'react'
import styled from 'styled-components'


//Styled Components
const CharacterContainer = styled.div`
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
    margin-bottom: 2% 0;
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
    padding: 2%; 
`;




export default function Character(props) {
    //Destructure Props
    const { data } = props
    return (
        <CharacterContainer>
            <Title><h2>{data[0]["name"]}</h2></Title>
            <Details>
                <div>Gender: {data[0]["gender"]}</div>
                <div>Hair Color: {data[0]["hair_color"]}</div>
                <div>Eye Color: {data[0]["eye_color"]}  </div>
                <div>Skin Color: {data[0]["skin_color"]}</div>
                <div>Height: {data[0]["height"]}</div>
                <div>Mass: {data[0]["mass"]}</div>
                <div>Species: {data[0]["species"]}</div>
                <div>Homeworld: {data[0]["homeworld"]}</div>
            </Details>
        </CharacterContainer>
    );
}

