import React from "react";
import "./headerResult.scss";
export default function HeaderResult(props) {
  return (
    <div className="header-result-container">
      <img className="header-result-pic" src={props.src} alt="google" />
      <div className="header-result-info-container">
        <span className="header-result-head">{props.head}</span>
        <a href={props.a} className="header-result-link">
          {props.a}
        </a>
      </div>
    </div>
  );
}
