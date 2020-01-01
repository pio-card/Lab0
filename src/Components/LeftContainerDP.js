import React from "react";

import TaskListContainer from "./TaskListContainer";

function LeftContainerDP() {
  return (
    <section className="leftContainer">
      <fieldset>
        <article>
          <h3>This is my top section</h3>
        </article>
        <legend>Calendar</legend>
      </fieldset>

      <fieldset>
        <article>
          <TaskListContainer />
        </article>
        <legend>Task List</legend>
      </fieldset>
    </section>
  );
}

export default LeftContainerDP;
