import React from "react";
import ReactDOM from "react-dom";
import Quotes from "/components/Quotes";
import Image from "/components/Image";
import "./styles.css";
import { Card } from "reactstrap";

function App() {
  return (
    <div className="q">
      <h1>Quote Generator</h1>
      <Card>
        <Quotes />
        <Image />
      </Card>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
