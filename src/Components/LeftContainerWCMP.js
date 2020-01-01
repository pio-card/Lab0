import React from "react";
import MonthYearPicker from "./MonthYearPicker";

function LeftContainerWCMP() {
  return (
    <section className="leftContainer">
      <fieldset>
        <article>
          <MonthYearPicker />
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
