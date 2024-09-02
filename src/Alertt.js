import React from "react";
import "./App.css";
import Header from "./Header";
function Alertt({ isvisABLE, errMAssage = null, cOLor }) {
  if (isvisABLE) {
    return (
      <div id="alerew">
        <div id="ale">
          {/*<p>nnnnnnnnnnnnnnnnnnthe form</p>*/}
          <p style={{ color: cOLor }}>{errMAssage}</p>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
export default Alertt;
