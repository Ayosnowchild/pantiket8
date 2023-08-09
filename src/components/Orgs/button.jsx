import React from "react";

function button({ title, style }) {
  return (
    <button className={style === "pry" ? "pry-btn" : "sec-btn"}>{title}</button>
  );
}

export default button;
