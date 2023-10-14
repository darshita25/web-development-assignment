import React from "react";
import { useState } from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
    return (
        <StyledWrapper>
            <StyledContainer >
                <Title>
                    <h3>
                        <span>Task 3:</span> Build a dropdown
                    </h3>
                    <p>Your objective is to replicate the design and functionality of the given Figma design. Pay attention to details such as colors, fonts, and spacing to achieve a faithful representation of the design.</p>
                </Title>
                <QuestionsGrid>
                    <AnswerDiv>
                    <div className="dropdownContainer" style={{ marginBottom: '20px' }}>
                    <style>{styles}</style> 
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
        className="dropdown"
        style={{
            padding: '8px',
            border: '1px solid black',
            borderRadius:'4px',
            transition: 'border-color 0.3s ease',
            fontFamily:'Lexend Regular',
            fontSize:'normal',
          }}
      >
        <option value="">Choose an option</option>
        <option value="Mountain">Mountain</option>
        <option value="Forest">Forest</option>
        <option value="Ocean">Ocean</option>
        <option value="Desert">Desert</option>
      </select>
    </div>
                    </AnswerDiv>
                </QuestionsGrid>
            </StyledContainer>
        </StyledWrapper>
    )
}

export default Dropdown

const StyledWrapper=styled(Wrapper)`
`
const Title = styled.div`
h3{
    font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
    span{
        background:#FAE090;
    }
}
p{
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const QuestionsGrid = styled.div`

`
const StyledContainer = styled(Container)`
margin-top:0;
`
const AnswerDiv = styled.div`
align-self:center;
display: flex;
flex-direction:row;
button{
    margin:0 10px;
}
`
const FigmaButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #2684FE;
min-width:150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #FFF;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor:pointer;
`
const PrototypeButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #FFFFFF;
min-width:150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #2684FE;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor:pointer;
`
const styles = `
    .dropdownContainer {
      margin-bottom: 20px;
    }
    .dropdownContainer :hover{
        border-color:blue;
    }

    .dropdown {
      padding: 8px;
      border: 1px solid #ccc;
      transition: border-color 0.3s ease;
    }

    .dropdown:hover {
      border-color: blue;
    }

    .dropdown option:hover {
      background-color: blue;
      color: white;
    }
  `