import { NavLink } from "react-router-dom";
import styled from "styled-components";

//floating NavBar
const NavBar = () => {
  return (
    <StyledHeader>
      <StyledNavLink to="/">
        <p>YS</p>
      </StyledNavLink>
      <StyledNav>
        <SubNavLink to="/about">About</SubNavLink>
        <SubNavLink to="/projects">Projects</SubNavLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default NavBar;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  max-width: 64rem;
  margin-inline: auto;
  position: absolute;
  top: 0;
  background-color: transparent;
  z-index: 10;
  right: 0;
  left: 0;
  @media (max-width: 640px) {
    padding-inline: 4rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 12px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: 700;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  text-decoration: none;
  color: #ffc861;
`;

const StyledNav = styled.nav`
  display: flex;
  font-size: 1.125rem;
  line-height: 1.75rem;
  gap: 1.75rem;
  font-weight: 500;
`;

const SubNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: #030062;
  }
`;
