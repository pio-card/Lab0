import React, { Component } from "react";
//import injectTapEventPlugin from "react-tap-event-plugin";
import "../styles.css";

//injectTapEventPlugin(); needed?

import Loginscreen from "../Components/Loginscreen";

const axios = require("axios");

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      loginPage: [],
      uploadScreen: []
    };
  }
  getTasks() {
    axios.get(`https://t4fmo.sse.codesandbox.io/`).then(res => {
      //const emps = res.data;
      //this.setState({ emps });
      console.log(res.data.status);
    });
  }

  componentDidMount() {
    this.getTasks();
  }

  UNSAFE_componentWillMount() {
    var loginPage = [];
    loginPage.push(<Loginscreen parentContext={this} />);
    this.setState({
      loginPage: loginPage
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}
