import React from "react";
import "./Cards.css";
function Cards(props) {
  return (
    <div className="elements" style={{ padding: "10px" }}>
      <a href={props.path}>{props.name}</a>
      <br></br>
    </div>
  );
}
export default Cards;
