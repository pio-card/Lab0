import React from "react";

import { format } from "date-fns";
import startOfWeek from "date-fns/startOfWeek";
import addDays from "date-fns/addDays";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import endOfWeek from "date-fns/endOfWeek";
import isSameMonth from "date-fns/isSameMonth";
import isSameDay from "date-fns/isSameDay";

import "../styles.css";

//to give cal component access to color array code review:7.1
const colors = [
  "bkcolorGreen",
  "bkcolorBlue",
  "bkcolorOrange",
  "bkcolorYellow"
];

//to give call access to article collection code review:7.2
const articles = ["Work Days", "Holy Days", "Vacation Days", "Sick Days"];

class Cal extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDate: new Date() //to store the selected date
    };
  }
  //render the head of the calendar - still need to change values of  div
  renderHeader() {
    const dateFormat = "MM/yyyy"; //'MMMM- will get month in string
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div
            className="icon"
            onClick={e => this.props.onClick("chevron_left")}
          >
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{format(new Date(this.props.d), dateFormat)}</span>
        </div>
        <div className="col col-end">
          <div
            className="icon"
            onClick={e => this.props.onClick("chevron_right")}
          >
            chevron_right
          </div>
        </div>
      </div>
    );
  }

  //render the days of the calendar status: works
  renderDays() {
    const dateFormat = "EEEE";
    const days = [];
    let startDate = startOfWeek(new Date(this.props.d));

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  }

  //to render the divs that the days are enclosed in -calendar cells
  //bug #4: the onDateClick function sends as target either a div or a nested span
  //ot ure what to do with that now otherwise this renderells works just fine
  renderCells() {
    const { selectedDate } = this.state;
    const monthStart = startOfMonth(new Date(this.props.d));
    const monthEnd = endOfMonth(new Date(monthStart));
    const startDate = startOfWeek(new Date(monthStart));
    const endDate = endOfWeek(new Date(monthEnd));

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    console.log("stratDate assigned to day" + day);
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(new Date(day), dateFormat);
        const cloneDay = day;

        days.push(
          <div
            class={`col cell ${
              !isSameMonth(new Date(day), new Date(monthStart))
                ? "disabled"
                : isSameDay(new Date(day), new Date(selectedDate))
                ? "selected"
                : ""
            } ${this.state.class &&
              isSameDay(new Date(day), new Date(selectedDate))}`}
            key={day}
            onClick={e => {
              this.onDateClick(e, new Date(cloneDay)); //this is targeting both dv and nested spans
            }}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = addDays(new Date(day), 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  //bug #4: //this is targeting both dv and nested spans- we want div only
  //removed the bg styling of the span...not sure if i want it back status: to be reviewed
  onDateClick = (e, day) => {
    console.log("this is the day value " + day);
    console.log(e.target);
    console.log(articles);
    e.target.removeAttribute("class");
    //e.target.classList.add("bg"); //missing static bg for styling background number as big
    e.target.classList.add(colors[articles.indexOf(this.props.theme)]);

    this.setState({
      selectedDate: day
    });
  };
  //render function works fine status: works
  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Cal;
