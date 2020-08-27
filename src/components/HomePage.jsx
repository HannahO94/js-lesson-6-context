import React from "react";
import { useContext, useRef } from "react";
import { NameContext } from "../context/NameContext";
import SubmitButton from "./SubmitButton";
import ForgetButton from "./ForgetButton";

export default function HomePage() {
  const { setFirstName, setLastName } = useContext(NameContext);
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  function handleOnClick() {
    setFirstName(firstNameInput.current.value);
    setLastName(lastNameInput.current.value);
  }
  function forgetOnClick() {
    setFirstName("");
    setLastName("");
  }

  return (
    <div className="container">
      <h1 className="text-center mt-3">Home</h1>
      <div className="form-group">
        <label>Firstname</label>
        <br />
        <input ref={firstNameInput} type="text" className="form-control" />

        <label>Lastname</label>
        <br />
        <input ref={lastNameInput} type="text" className="form-control" />
      </div>
      <SubmitButton handleOnClick={handleOnClick} />
      <ForgetButton forgetOnClick={forgetOnClick} />
    </div>
  );
}
