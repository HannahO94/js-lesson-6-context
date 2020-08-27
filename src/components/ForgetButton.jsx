import React from "react";

export default function ForgetButton({ forgetOnClick }) {
  return (
    <div>
      <button className="btn btn-warning mt-2" onClick={forgetOnClick}>
        Forget me
      </button>
    </div>
  );
}
