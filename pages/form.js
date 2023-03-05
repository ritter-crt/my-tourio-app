import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "styled-components";
import PlaceForm from "../components/Form";

export default function FormPage() {
  // const [cardList, setCardList] = useState([]);

  // function refreshPage() {
  //   const fetchData = async () => {
  //     const data = await fetch("/api/places");
  //     const cards = await data.json();
  //     setCardList(cards);
  //   };
  //   fetchData().catch(console.error);
  // }

  // useEffect(() => {
  //   refreshPage();
  // }, []);

  // if (!cardList) {
  //   return <h1>Loading...</h1>;
  // }

  // function addCard(newCard) {
  //     setCardList([newCard, ...cardList]);
  //     refreshPage();
  //   }
 
  return (
    <>
      <Div>Add new places</Div>
      <PlaceForm></PlaceForm>
      <StyledLink href="/">back</StyledLink>
    </>
  );
}

const Div = styled.div`
text-align: center;
  margin-top: 10rem ;
  font-size: 1.5rem;
  font-weight: 100;
  text-transform: lowercase;
  padding: 1rem;
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
