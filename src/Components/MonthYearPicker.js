import React from "react";

class MonthYearPicker extends React.Component {
  constructor() {
    super();
    this.state = {
      month: "",
      year: ""
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
        <label for="start">Select A Calendar:</label>
        <input type="month" id="start" name="start" min="2020-01" value="" />
        <br />
        <br />
        <button onClick={this.handleClick}>View!</button>
      </div>
    );
  }
}

export default MonthYearPicker;
