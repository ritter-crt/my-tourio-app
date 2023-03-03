// import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function Card({ }) {

  const [entries, setEntries] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/attractions')
      .then((res) => res.json())
      .then((entries) => {
        setEntries(entries)
        setLoading(false)
      })
    }, [])
    console.log(entries)

  if (isLoading) return <p>Loading...</p>
  if (!entries) return <p>No data</p>

    return (
      <>
        <div>Attractions</div>
        {entries.map ((entry) => (
        <section className="entry__wrapper" key={entry._id}>
        <h4 className="entry__attraction_title">{entry.name}</h4>
        <div className="entry__location">{entry.location}</div>
        <div>{entry.description}</div>
        <Image className="entry__image"src={entry.image} height={500} width={500} alt={entry.name}/>
        </section>
        ))}
      </>
    );
  }


  