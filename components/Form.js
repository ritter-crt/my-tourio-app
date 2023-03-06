// import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function PlaceForm() {
  
  const router = useRouter();
  const places = useSWR("/api/places");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newPlace = Object.fromEntries(formData);
    console.log("newPlace_____", newPlace);

    const response = await fetch("/api/places/create", {
      method: "POST",
      body: JSON.stringify(newPlace),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
      places.mutate();

      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <div>
      <EntryForm onSubmit={handleSubmit}>
        <InputWrapper>
          <label htmlFor="name">Name</label>
          <input id="name" name="name"></input>
          <label htmlFor="image">Image URL</label>
          <input id="image" name="image"></input>
          <label htmlFor="location">Location</label>
          <input id="location" name="location"></input>
          <label htmlFor="mapURL">Map URL</label>
          <input id="mapURL" name="mapURL"></input>
          <label htmlFor="description">Description</label>
          <input id="description" name="description"></input>
          <button onClick={() => router.push(`/`)}>Save Place</button>
        </InputWrapper>
      </EntryForm>
    </div>
  );
}

const EntryForm = styled.form`
  justify-content: center;
`;

const InputWrapper = styled.div`
  border: solid;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  height: 100%;
  margin-left: 10%;
  margin-right: 10%;
`;
