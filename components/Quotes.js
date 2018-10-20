import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const API = "https://safe-garden-90262.herokuapp.com/api/quote";
//"https://quotes.stormconsultancy.co.uk/random.json";
//"https://talaikis.com/api/quotes/random";

class Quotes extends React.Component {
  state = {
    quote: "",
    author: "",
    isLoading: false,
    error: null
  };

  signal = axios.CancelToken.source();

  componentDidMount() {
    this.onLoadQuote();
  }

  componentWillUnmount() {
    this.signal.cancel("Api is being canceled");
  }

  onLoadQuote = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await axios.get(API, {
        cancelToken: this.signal.token
      });
      this.setState({
        quote: response.data.quoteText,
        author: response.data.quoteAuthor,
        isLoading: false
      });
    } catch (err) {
      if (axios.isCancel(err)) {
        this.setState({
          error: err,
          isLoading: true
        });
        console.log("Error: ", err.message); // => prints: Api is being canceled
      } else {
        this.setState({ isLoading: false });
      }
    }
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
        <h1 className="author">by: {author}</h1>
      </div>
    );
  }
}

export default Quotes;
