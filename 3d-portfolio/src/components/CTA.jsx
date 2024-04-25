import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//call to action.
//added in the end of about screen and projects screen
const CTA = () => {
  return (
    <CTAContainer>
      <CTAText>
        Have a project in mind? <BreakTag />
        Let's collaborate!
      </CTAText>
      <ContactLink to={"/contact"}>Contact</ContactLink>
    </CTAContainer>
  );
};

export default CTA;

const CTAContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 1.75rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 640px) {
    margin-top: 4rem;
  }
`;

const BreakTag = styled.br`
  display: none;
  @media (max-width: 640px) {
    display: block;
  }
`;

const CTAText = styled.p`
  font-weight: 900;
  flex: 1;
  font-size: 1.875rem;
  line-height: 2.25rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ContactLink = styled(Link)`
  width: 100%;
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  border-width: 0px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 100%;
  padding-inline: 1.25rem;
  padding-block: 0.625rem;
  text-align: center;
  background-image: linear-gradient(to right, #ffc04b, #ff8c49);
  text-decoration: none;
  @media (min-width: 640px) {
    width: auto;
  }

  &:focus {
    border-color: #f59f0b;
    box-shadow: 0 0 0 3px #f59f0b79;
    outline: none;
  }
`;
