import { useEffect, useState } from "react";
import useSWR from "swr";
import Card from "../components/Card";
import dbConnect from "../db/connect";
import Place from "../db/models/Place";

export default function HomePage({places}) {
  // const [entries, setEntries] = useState(null);
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("/api/places")
  //     .then((res) => res.json())
  //     .then((entries) => {
  //       setEntries(entries);
  //       setLoading(false);
  //     });
  // }, []);
  // console.log(entries);

  // if (isLoading) return <p>Loading...</p>;
  // if (!entries) return <p>No data</p>;

  return (
    <>
      <Card places={places}></Card>
    </>
  );
}

// getServerSideProps need to be on the same level as component!!! Outside of the function and inside the component
// use fetch is not needed in this case


export async function getServerSideProps() {
  await dbConnect();

  try {
    const places = await Place.find();
    // console.log(places);
    return {
      props: {
        places:JSON.parse(JSON.stringify(places))
      }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
}