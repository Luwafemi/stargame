import React from "react";
import utils from "./utils.js";

const StarNumbers = (props) => (
  <div>
    {" "}
    {utils.range(1, props.stars).map((a) => (
      <div key={a} className="star" />
    ))}{" "}
  </div>
);
export default StarNumbers;
