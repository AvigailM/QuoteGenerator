import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const API = "https://talaikis.com/api/quotes/random";

class Quotes extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      author: "",
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getRandomQuote();
  }

  getRandomQuote = () => {
    axios
      .get(API)
      .then(result =>
        this.setState({
          quote: result.data.quote,
          author: result.data.author,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: true
        })
      );
  };

  render() {
    const { quote, author, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="quotes">
        <h1> "{quote}"</h1>
        <h1>by: {author}</h1>
      </div>
    );
  }
}

export default Quotes;
