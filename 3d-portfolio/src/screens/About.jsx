import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { styled } from "styled-components";
import { technologies, experiences, education } from "../constants";
import CTA from "../components/CTA";

//component about me. List my tech skills, education and work experience
const About = () => {
  return (
    <AboutSection>
      <Title>
        Hello, I'm <Name>Youngjin</Name>
      </Title>
      <Description>
        <p>
          A Computer Science major in Boston University with a blend of
          technical expertise and a creative mindset from my minor in Visual
          Arts.
        </p>
      </Description>
      <SkillsContainer>
        <SubTitle>My Skills</SubTitle>
        <Skills>
          {technologies.map((tech) => (
            <SkillImagesContainer>
              <SkillIconWrapper>
                <SkillImage src={tech.icon} alt={tech.name} key={tech.index} />
              </SkillIconWrapper>
            </SkillImagesContainer>
          ))}
        </Skills>
      </SkillsContainer>
      <ExperienceContainer>
        <SubTitle>Work Experience</SubTitle>
        <Skills>
          {experiences.map((experience) => (
            <ExperienceWrapper>
              <ExperienceHeaderContainer>
                <h4>
                  {experience.title} | {experience.company_name}
                </h4>
                <SmallGreyText>{experience.date}</SmallGreyText>
              </ExperienceHeaderContainer>
              {experience.points.map((point) => (
                <SmallGreyText>• {point}</SmallGreyText>
              ))}
            </ExperienceWrapper>
          ))}
        </Skills>
      </ExperienceContainer>
      <EducationContainer>
        <SubTitle>Education</SubTitle>
        <Skills>
          {education.map((edu) => (
            <ExperienceWrapper>
              <ExperienceHeaderContainer>
                <h4>{edu.school}</h4>
                <SmallGreyText>{edu.date}</SmallGreyText>
              </ExperienceHeaderContainer>
              <SmallGreyText>{edu.extra}</SmallGreyText>
            </ExperienceWrapper>
          ))}
        </Skills>
      </EducationContainer>

      <HorizontalLine />
      <CTA />
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  max-width: 64rem;
  margin-inline: auto;
  padding-bottom: 3rem;
  padding-top: 7.875rem;
  padding-inline: 2rem;
  min-height: calc(100vh-90);
`;

const Title = styled.h1`
  font-weight: 600;
  @media (min-width: 640px) {
    font-size: 3rem;
    line-height: 1;
  }
`;

const Name = styled.span`
  background: linear-gradient(to right, #ffc04b, #ff8c49);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
  text-shadow:
    0 4px 3px rgba(0, 0, 0, 0.1),
    0 2px 3px rgba(0, 0, 0, 0.1);
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  color: #949494;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 2.5rem;
`;

const SubTitle = styled.h3`
  font-weight: 600;
  position: relative;

  @media (min-width: 640px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4rem;
  gap: 3rem;
`;

const SkillImage = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;
`;

const SkillImagesContainer = styled.div`
  position: relative;
  transition: 250ms;
  perspective: 500px;
  width: 5rem;
  height: 5rem;
`;

const SkillIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;
  position: absolute;
  align-items: center;
  inset: 0;
  z-index: 1;
  width: inherit;
  height: inherit;
  box-shadow: 1rem 0 2.5rem #d0cfcf;
  transition: 250ms;
  transform-style: preserve-3d;
  transform-origin: top left;
  overflow: hidden;

  &:hover {
    transform: translateZ(80px) translateY(-5px) rotateX(10deg) rotateY(10deg);
  }
`;

// const SkillIconBackWrapper = styled.div`
//   position: absolute;
//   inset: 0;
//   border-radius: 0.5rem;
//   z-index: -1;
//   width: inherit;
//   height: inherit;
//   transition: 250ms;
//   transform-style: preserve-3d;
//   transform-origin: bottom right;
//   transform: rotateZ(10deg);
//   will-change: transform;
//   box-shadow: 1rem 0 2.5rem #b5b5b5;
// `;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 4.5rem;
`;

const ExperienceWrapper = styled.div`
  width: 100%;
  box-shadow: 1rem 0 2.5rem #d0cfcf;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  padding-inline: 2rem;
  padding-block: 1rem;
`;

const ExperienceHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SmallGreyText = styled.p`
  color: #676767;
  font-size: small;
  font-weight: 600;
`;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 4.5rem;
`;

const HorizontalLine = styled.hr`
  border-color: #b5b5b520;
`;
