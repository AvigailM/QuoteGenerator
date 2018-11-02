// import throttle from 'lodash.throttle';
import React from "react";
import throttle from "lodash.throttle";
import Button from "@material-ui/core/Button";

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickThrottled = throttle(this.handleClick, 1000);
  }

  componentWillUnmount() {
    this.handleClickThrottled.cancel();
  }

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.handleClickThrottled}
        >
          Load More
        </Button>
      </div>
    );
  }

  handleClick() {
    this.props.onNewLoad();
  }
}

export default CustomButton;
