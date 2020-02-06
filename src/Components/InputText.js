import * as React from "react";

class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  // this needs refactoring - html 5 has an input type month
  render() {
    return (
      <div>
        Select Calendar Month:
        <input
          type="text"
          name="selectedMonth"
          onChange={this.props.onChange}
        />
        <br />
        Select Calendar Year:
        <input
          type="number"
          name="selectedYear"
          onChange={this.props.onChange}
        />
        <br />
        <button onClick={this.props.onClick}>View Calendar</button>
      </div>
    );
  }
}

export default InputText;
