import React from "react";
import { Link } from "react-router-dom";

export default function StartPage() {
  return (
    <div
      className="ml-2"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <Link to="/">Start</Link> <Link to="/home">Home</Link>{" "}
      <Link to="/about-you">About you</Link>{" "}
    </div>
  );
}
