import React from "react";
import Navbar from "../components/Navbar";

function Details(props) {
  return (
    <>
      <Navbar />
      <major>
        <p>By Ryan Jackson</p> <span>2 Month Ago </span>
        <h1>Optimizing CSS for faster page loads </h1>
      </major>
    </>
  );
}

export default Details;
