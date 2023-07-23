import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import Link from "./Link";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
function newLink(Link) {
  return (
    <div>
      <Cards id={Link.id} name={Link.name} path={Link.url}></Cards>
    </div>
  );
}
function Home() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Heading></Heading>
        <div className="segment">{Link.map(newLink)}</div>
      </div>
    </div>
  );
}
export default Home;
