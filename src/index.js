import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Check out ./src/hooks</h1>
      <a href="https://github.com/testing-library/react-hooks-testing-library/tree/master/test">
        react-hooks-testing-library
      </a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
