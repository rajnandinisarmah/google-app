import React from "react";
import "./singleResult.scss";
export default function SingleResult(props) {
  return (
    <div className="single_search_container">
      <h3 className="single_search_heading">{props.heading}</h3>
      <p className="single_search_description">{props.description}</p>
    </div>
  );
}
