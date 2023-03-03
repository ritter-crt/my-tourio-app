import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <>
    <h2 className="header__homepage"></h2>
    <NavBar className="nav__bar">
      <StyledLink className="nav__link" href="/" >home</StyledLink>
      <StyledLink className="nav__link" href="/form" > + </StyledLink>
      <StyledLink className="nav__link" href="/" >favorite places</StyledLink>
    </NavBar>

    </>
  );
}

const NavBar = styled.section `
  top: 0;

  display: flex;

  align-items: baseline;
  position: fixed;
  background-color: white;
  height: 8%;
  width: 100%;

`;

const StyledLink = styled(Link)`
/* color:aliceblue; */
  padding: 1rem 1rem;
  list-style-type: none;
  text-decoration: none;
  text-transform: lowercase;
  font-weight: 600;
  letter-spacing: 0.2rem;
  color: gray;
`