//import library statements
import React from "react";

import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";

import LeftContainerWCMP from "../Components/LeftContainerWCMP";
import RightContainerWCMP from "../Components/RightContainerWCMP";

import CalPlanner from "../Components/CalPlanner"; //code review:8.1
import "../styles.css";
//to store the bgcolor of calPlanner code review: 8.3
const colors = [
  "bkcolorGreen",
  "bkcolorBlue",
  "bkcolorOrange",
  "bkcolorYellow"
];
//code review: 8.2
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

class WCM extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedMonth: "", //to store selectedMonth
      selectedYear: "", //to store selectedYear
      d: new Date(), //to create a new date object
      display: false, // to display calendar in right contaier
      selected: false, // to select DayPlanner component
      article: "", //DayPlanner components code review: 8.6
      theme: "", // to store calplanner selected theme
      articles: [] //to give access to article array to grandchildren code review: 8.7
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeCalendar = this.changeCalendar.bind(this);
  }
  //function for leftContainer "view Calendar" control code review: 8.4
  handleClick = props => {
    var selectedMonth = months.indexOf(this.state.selectedMonth);
    var selectedYear = Number(this.state.selectedYear);
    var d = new Date(
      Number(this.state.selectedYear),
      months.indexOf(this.state.selectedMonth)
    );
    this.setState({
      selectedMonth: selectedMonth,
      selectedYear: selectedYear,
      display: !this.state.display,
      d: d,
      articles: ["Work Days", "Holy Days", "Vacation Days", "Sick Days"]
    });
    console.log("here: " + this.state.d);
  };
  //function to handle input text data entry changes in LC
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  //function for prevMonth and nextMonth controls
  changeCalendar(type) {
    if (type === "chevron_left") {
      this.setState({
        d: subMonths(new Date(this.state.d), 1)
      });
    } else if (type === "chevron_right") {
      this.setState({
        d: addMonths(new Date(this.state.d), 1)
      });
    }
  }

  //function to select calPlanner code review: 8.5
  onSelectArticle = article => {
    this.setState({
      selected: true,
      article: article,
      theme: article
    });
  };

  render() {
    const {
      d,
      selectedMonth,
      selectedYear,
      display,
      selected,
      theme,
      articles
    } = this.state;

    return (
      <div className="App">
        <div className="main">
          <LeftContainerWCMP
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
            d={d}
            onClick={this.handleClick}
            onChange={this.handleChange}
          />
          <RightContainerWCMP
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
            d={d}
            display={display}
            onClick={this.changeCalendar}
            article={articles.map((article, index) => (
              <CalPlanner
                key={index}
                class={
                  this.state.selected && article === this.state.article
                    ? colors[articles.indexOf(this.state.article)]
                    : "default"
                }
                onClick={() => this.onSelectArticle(article)}
                article={article} //code review: 8.9
                articles={articles}
              />
            ))}
            selected={selected}
            theme={theme}
          />
        </div>
      </div>
    );
  }
}
export default WCM;
