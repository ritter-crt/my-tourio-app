import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <>
      <StyledCardWrapper>
        <StyledHeader>Tourio</StyledHeader>
        <NavBarWrapper>
          <StyledLink href="/">
            home
          </StyledLink>
          <StyledLink href="/form">
            {" "}
            +{" "}
          </StyledLink>
          <StyledLink href="/favorites">
            favorite places
          </StyledLink>
        </NavBarWrapper>
      </StyledCardWrapper>
    </>
  );
}

const StyledCardWrapper = styled.div`
  top: 0;
  display: flex;
  align-items: baseline;
  position: fixed;
  background-color: white;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  width: 100%;
`;

const StyledHeader = styled.h1`
  font-weight: 100;
  float:left;
  text-transform: uppercase;
`;

const StyledLink = styled(Link)`
  list-style-type: none;
  text-decoration: none;
  text-transform: lowercase;
  font-weight: 600;
  letter-spacing: 0.2rem;
  color: gray;
  padding:1rem;
`;

const NavBarWrapper = styled.div`
  margin-left: auto;
  order: 2;
  padding: 2rem;
`;
