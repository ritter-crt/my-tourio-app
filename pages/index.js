import styled from "styled-components";
import Card from "../components/Card";
import Layout from "../components/Layout";



const Heading = styled.h1`
  text-align: center;
`;

export default function HomePage(){
    return (
        <>
        <Layout/>
            <Heading>Tourio</Heading>
            <Card></Card>
        </>
    )
}