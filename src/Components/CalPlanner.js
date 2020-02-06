import React from "react";
// not sure why the span has an id of one...status: to be reviewed
function CalPlanner(props) {
  return (
    <span id="One" className={props.class} onClick={props.onClick}>
      {props.article}
    </span>
  );
}
export default CalPlanner;
