import styled from "styled-components";

export default function Form() {
  return (
    <EntryForm>
      <InputWrapper>
        <input
          placeholder={`recommended place`}
          name="text"
          autoComplete="off"
          aria-label="Enter text"
        />
        <input
          placeholder={`specify city`}
          name="name"
          aria-label="Enter description"
        />
        <input
          placeholder={`what I love about the place`}
          name="name"
          aria-label="Enter description"
        />
      </InputWrapper>
      <Button>✚</Button>
    </EntryForm>
  );
}

const EntryForm = styled.form`
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div`
  border: solid;
  padding: 10px;
  height: 100%;
  width: 100%;

  input {
  }
`;

const Button = styled.button`
  background-color: white;
  color: #fe4b13;
  border: none;
  border-radius: 7px;

  svg {
    height: 48px;
    width: 48px;
  }
`;
