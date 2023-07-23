import React from "react";
import Navbar from "./Navbar";
import Link from "../Link";
import { useParams } from "react-router-dom";
const Category = () => {
  const { category } = useParams();
  return (
    <div>
      <Navbar></Navbar>
      <h1>{category}</h1>
    </div>
  );
};

export default Category;
