import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { IoMdArrowRoundForward } from "react-icons/io";

//popUp message floating in the middle of the screen

const InfoBox = ({ text, link, btnText }) => {
  return (
    <InfoBoxContainer>
      <InfoBoxText>{text}</InfoBoxText>
      <StyledLink to={link}>
        {btnText}
        <IoMdArrowRoundForward style={{ marginLeft: 10 }} />
      </StyledLink>
    </InfoBoxContainer>
  );
};
const Popup = ({ currentStage }) => {
  const renderPopup = {
    1: (
      <StyledContentTitle>
        Hi, I'm <StyledSpan>Youngjin</StyledSpan>.
        <br />
        Welcome to my Island! 🏝️
      </StyledContentTitle>
    ),
    2: (
      <InfoBox
        text={"From concept to code to completion. Ready to explore?"}
        link="/about"
        btnText={"Learn more"}
      />
    ),
    3: (
      <InfoBox
        text={"Ready to connect?"}
        link="/contacts"
        btnText={"Let's Chat"}
      />
    ),
  };

  return renderPopup[currentStage] || null;
};

export default Popup;

const InfoBoxContainer = styled.div`
  margin-inline: 1.25rem;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 42rem;
  padding-top: 1rem;
  padding-bottom: 3rem;
  padding-inline: 2rem;
  background-color: orange;
  border-radius: 10px;
`;

const StyledContentTitle = styled.h1`
  text-align: center;
  padding-block: 1.5rem;
  padding-inline: 3rem;
  color: white;
  margin-inline: 1.25rem;
  background-color: orange;
  border-radius: 10px;
  font-weight: 400;

  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  @media (max-width: 640px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const StyledSpan = styled.span`
  font-weight: 600;
`;

const InfoBoxText = styled.p`
  font-weight: 500;
  text-align: center;
  /* @media (max-width: 640px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  } */
`;

const StyledLink = styled(Link)`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgb(100 100 100 / 0.1),
    0 2px 4px -2px rgb(100 100 100 / 0.1);
  padding-block: 0.75rem;
  padding-inline: 1.5rem;
  color: #eb8202;
  text-align: center;
  font-weight: 600;
  position: absolute;
  margin-inline: auto;
  right: 0;
  left: 0;
  bottom: -1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 3; */
  text-decoration: none;
  width: 90%;
  @media (max-width: 640px) {
    width: 90%;
  }
`;
