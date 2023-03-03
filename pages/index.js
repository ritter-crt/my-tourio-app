import styled from "styled-components";
import Card from "../components/Card";


const Heading = styled.h1`
  text-align: center;
`;

export default function HomePage(){
    return (
        <>
            <Heading>Tourio</Heading>
            <Card></Card>

        </>
    )
}