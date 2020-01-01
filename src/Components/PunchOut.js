import React from "react";

class PunchOut extends React.Component {
  constructor() {
    super();
    this.state = {
      timestamp: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const timestamp = Date.now();
    const tstamp = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(timestamp);

    this.setState(prevState => {
      return {
        timestamp: tstamp
      };
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.timestamp}</p>
        <button onClick={this.handleClick}>Punch Out!</button>
      </div>
    );
  }
}

export default PunchOut;
