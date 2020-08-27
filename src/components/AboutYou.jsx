import React from "react";
import { useContext } from "react";
import { NameContext } from "../context/NameContext";

export default function AboutYou() {
  const { firstName, lastName } = useContext(NameContext);

  return (
    <div className="container">
      <h1 className="text-center mt-3">About You</h1>
      <h3 className="text-center">
        Welcome {firstName} {lastName}
      </h3>
    </div>
  );
}
