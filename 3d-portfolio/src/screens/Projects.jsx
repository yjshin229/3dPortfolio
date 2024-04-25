import React from "react";
import styled from "styled-components";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <ProjectsSection>
      <Title>
        My <HighlightText>Projects</HighlightText>
      </Title>
      <Description>
        <p>
          Over the years, I've tackled numerous projects, but the ones featured
          here represent my most innovative and impactful efforts. Each
          highlighted project demonstrates my problem-solving skills and my
          dedication to achieving exceptional outcomes.
        </p>
      </Description>
      <SubContainer>
        <SubTitle>Education</SubTitle>
        <ProjectsContainer>
          {projects.map((project) => (
            <ProjectsWrapper>
              <ProjectHeaderContainer>
                <h3>{project.name}</h3>
                <SmallGreyText>{project.date}</SmallGreyText>
              </ProjectHeaderContainer>
              {project.points.map((point) => (
                <SmallGreyText>• {point}</SmallGreyText>
              ))}
              <LinkContainer>
                <StyledLink
                  to={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </StyledLink>

                {project.article_link && (
                  <>
                    <HorizontalDivider> | </HorizontalDivider>
                    <StyledLink
                      to={project.article_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Medium
                    </StyledLink>
                  </>
                )}
              </LinkContainer>
            </ProjectsWrapper>
          ))}
        </ProjectsContainer>
      </SubContainer>

      <HorizontalLine />
      <CTA />
    </ProjectsSection>
  );
};

export default Projects;

const ProjectsSection = styled.section`
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

const HighlightText = styled.span`
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

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4rem;
  gap: 3rem;
`;
const SubTitle = styled.h3`
  font-weight: 600;
  position: relative;

  @media (min-width: 640px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 4.5rem;
`;

const ProjectsWrapper = styled.div`
  width: 100%;
  box-shadow: 1rem 0 2.5rem #d0cfcf;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  padding-inline: 2rem;
  padding-block: 1rem;
`;

const ProjectHeaderContainer = styled.div`
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

const StyledLink = styled(Link)`
  font-weight: 600;
  color: orange;
  text-decoration: none;
  align-items: center;
`;

const LinkContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
`;

const HorizontalDivider = styled.span`
  margin-inline: 1rem;
  color: orange;
  font-weight: 600;
`;

const HorizontalLine = styled.hr`
  border-color: #b5b5b520;
`;
