import React from "react";
import ReactDOM from "react-dom";
import { CardImg } from "reactstrap";

function Image(props) {
  return (
    <div>
      <CardImg
        top
        width="50%"
        height="50%"
        onError={() => {
          console.log("error");
        }}
        src={props.srcUrl}
        alt="Card image cap"
      />
    </div>
  );
}

export default Image;
