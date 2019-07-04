import React from "react";
import ReactDOM from "react-dom";
import Modals from "./Modals";
import data from "./data.json";

import "./styles.css";

function App() {
  if (data) {
    var mod = data.modal.map((val, index) => (
      <Modals index={index} header={val.header} text={val.text} />
    ));
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {mod}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
