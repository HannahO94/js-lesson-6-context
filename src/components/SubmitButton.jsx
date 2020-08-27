import React from "react";

export default function SubmitButton({ handleOnClick }) {
  return (
    <div>
      <button className="btn btn-primary" onClick={handleOnClick}>
        Submit
      </button>
    </div>
  );
}
