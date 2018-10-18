import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { CardImg } from "reactstrap";

const PICTUREAPI = "https://dog.ceo/api/breeds/image/random";

class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      imgURL: "",
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(PICTUREAPI)
      .then(result =>
        this.setState({
          imgURL: result.data.message,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: true
        })
      );
  }

  render() {
    const styles = {
      fontFamily: "sans-serif",
      textAlign: "center",
      img: {
        height: "12em"
      }
    };

    const { imgURL, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <CardImg
        top
        width="50%"
        height="50%"
        src={this.state.imgURL}
        alt="Card image cap"
      />
    );
  }
}

export default Image;
