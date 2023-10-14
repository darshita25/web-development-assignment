import React, { useState } from "react";
import styled from "styled-components";
import { Container, Wrapper } from "./style";
import wrench from "../images/wrench.png";
import javaScript from "../images/js.png";
import gemStone from "../images/gem-stone.png";
import joystick from "../images/joystick.png";
import mobile from "../images/mobile-phone.png";
import mountain from "../images/mountain.png";
import nail from "../images/nail-polish.png";
import r from "../images/react.png";
import shop from "../images/shopping-bags.png";


const Q3 = () => {
  const [selectedImage, setSelectedImage] = useState(mountain);

  const handleImageChange = (event) => {
    console.log("Selected value:", event.target.value);
    const selectedImage = event.target.value;
    updateSelectedImage(selectedImage);
};

// const handleImageHover = (imageName) => {
//   updateSelectedImage(imageName);
// };

const updateSelectedImage = (imageName) => {
    console.log("Updating image:", imageName);
    switch (imageName) {
      case "mountain":
        setSelectedImage(mountain);
        break;
      case "wrench":
        setSelectedImage(wrench);
        break;
      case "javaScript":
        setSelectedImage(javaScript);
        break;
      case "gemStone":
        setSelectedImage(gemStone);
        break;
      case "joystick":
        setSelectedImage(joystick);
        break;
      case "mobile":
        setSelectedImage(mobile);
        break;
      case "nail":
        setSelectedImage(nail);
        break;
      case "r":
        setSelectedImage(r);
        break;
      case "shop":
        setSelectedImage(shop);
        break;
      default:
        setSelectedImage();
        break;
    }
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        <Title>
          <h3>
            <span>Task 4:</span> Build a component
          </h3>
          <p>
            In this section, you are required to build a new component based on
            a Figma design and prototype. The component's function should be to
            change the image displayed based on the item selected in the
            dropdown. Implement this functionality using HTML, CSS, and
            JavaScript.
          </p>
        </Title>
        <QuestionsGrid>
          <AnswerDiv>
            <CustomSelect
              id="imageSelector"
              value={selectedImage}
              onChange={handleImageChange}
              style={{
                padding: "8px",
                border: "1px solid black",
                borderRadius: "4px",
                fontFamily: "Lexend Regular",
                fontSize: "normal",
                transition: "border-color 0.3s ease",
              }}
            >
              <option value="mountain">Mountain</option>
              <option value="wrench">Wrench</option>
              <option value="javaScript">JavaScript</option>
              <option value="gemStone">Gem-Stone</option>
              <option value="joystick">Joystick</option>
              <option value="mobile">Mobile</option>
              <option value="nail">Nails</option>
              <option value="r">React</option>
              <option value="shop">Shop</option>
            </CustomSelect>
            <CustomImageBox>
              <CustomImage src={selectedImage} alt="Selected" />
            </CustomImageBox>
          </AnswerDiv>
        </QuestionsGrid>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Q3;

const StyledWrapper = styled(Wrapper)`
  background: #f6f7f9;
`;

const Title = styled.div`
  h3 {
    font-size: 32px;
    font-family: Lexend Medium;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.4px;
    span {
      background: #fae090;
    }
  }
  p {
    font-size: 18px;
    font-family: Lexend Regular;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
`;

const QuestionsGrid = styled.div``;

const StyledContainer = styled(Container)`
  margin-top: 0;
`;

const ImageDiv = styled.div`
  img {
    width: 300px;
  }
`;

const AnswerDiv = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  button {
    margin: 0 10px;
  }
`;

const CustomSelect = styled.select`
  width: 172px;
  height: 38.67px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 4px;
  font-family: "Lexend Regular";
  font-size: normal;
  transition: border-color 0.3s ease;
`;

const CustomImageBox = styled.div`
  width: 172px;
  height: 172px;
  margin-left: 60px;
`;

const CustomImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;