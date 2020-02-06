import React from "react";

import InputText from "./InputText";

function LeftContainerWCMP(props) {
  return (
    <section className="leftContainer">
      <fieldset>
        <article>
          <ul>
            <InputText
              d={props.d}
              selectedMonth={props.selectedMonth}
              selectedYear={props.selectedYear}
              onClick={props.onClick}
              onChange={props.onChange}
            />
          </ul>
        </article>
        <legend>Calendar</legend>
      </fieldset>

      <fieldset>
        <article />
        <legend>Task List</legend>
      </fieldset>
    </section>
  );
}

export default LeftContainerWCMP;
