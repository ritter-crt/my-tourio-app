import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr"
import Card from "./Card";

export default function PlaceForm({ onAddCard}) {
  
  const cards = useSWR("/api/attractions/create");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newCard = Object.fromEntries(formData);
    console.log(newCard);

    const response = await fetch("/api/attractions/create", {
      method: "POST",
      body: JSON.stringify(newCard),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
      cards.mutate();

      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }

    onAddCard(newCard);
    event.target.reset();
  }

  return (
    <div>
      <EntryForm>
        <InputWrapper>
          <label htmlFor="name">Name</label>
          <input id="name" name="name"></input>
          <label htmlFor="image">Image URL</label>
          <input id="image" name="image"></input>
          <label htmlFor="location">Location</label>
          <input id="location" name="location"></input>
          <label htmlFor="map-url">Map URL</label>
          <input id="map-url" name="map-url"></input>
          <label htmlFor="description">Description</label>
          <input id="description" name="description"></input>
          {/* <Link href="/"> */}
            <button onSubmit={handleSubmit}>Save Place</button>
          {/* </Link> */}
        </InputWrapper>
      </EntryForm>
    </div>
  );
}

{
  /* <form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form> */
}

// export default function Form() {
//   return (
//     <EntryForm>
//       <InputWrapper>
//         <input
//           placeholder={`recommended place`}
//           name="text"
//           autoComplete="off"
//           aria-label="Enter text"
//         />
//         <input
//           placeholder={`specify city`}
//           name="name"
//           aria-label="Enter description"
//         />
//         <input
//           placeholder={`what I love about the place`}
//           name="name"
//           aria-label="Enter description"
//         />
//       </InputWrapper>
//       <Button>✚</Button>
//     </EntryForm>
//   );
// }

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

// const Button = styled.button`
//   background-color: white;
//   color: #fe4b13;
//   border: none;
//   border-radius: 7px;

//   svg {
//     height: 48px;
//     width: 48px;
//   }
// `;

// const StyledDiv = styled.div `
// padding: 20%;
// `
