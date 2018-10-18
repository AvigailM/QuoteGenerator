import React from "react";
import ReactDOM from "react-dom";
import { CardImg } from "reactstrap";

class Image extends React.Component {
  render() {
    return (
      <div>
        <CardImg
          top
          width="50%"
          height="50%"
          onError={() => {
            console.log("error");
          }}
          src="https://source.unsplash.com/random"
          alt="Card image cap"
        />
      </div>
    );
  }
}

export default Image;
