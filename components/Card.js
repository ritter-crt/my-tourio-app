// import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";

export default function Card({}) {
  const [entries, setEntries] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/places")
      .then((res) => res.json())
      .then((entries) => {
        setEntries(entries);
        setLoading(false);
      });
  }, []);
  console.log(entries);

  if (isLoading) return <p>Loading...</p>;
  if (!entries) return <p>No data</p>;

  return (
    <>
      <div>Places to visit</div>
      <CardWrapper>
        {entries.map((entry) => (
          <div key={entry._id}>
            <h4>{entry.name}</h4>
            {/* <div>{entry.location}</div> */}
            {/* <div>{entry.description}</div> */}
            <Image
              src={entry.image}
              height={500}
              width={500}
              alt={entry.name}
            />
          </div>
        ))}
        </CardWrapper>
    </>
  );
}

const CardWrapper = styled.div`
display: flex;
flex-flow: row wrap;
gap: 10rem;
`

