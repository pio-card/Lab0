import React from "react";

import Cal from "./Cal";
import CalPlanner from "./CalPlanner";

function RightContainerWCMP(props) {
  const { display, selected, theme } = props; //to display calendar on a click event

  return (
    <section className="rightContainer">
      <fieldset>
        <div>
          <header>
            <div id="logo">
              <span className="icon">date_range</span>
              <span>
                react<b>calendar</b>
              </span>
            </div>
          </header>
          <main>
            {display ? (
              <React.Fragment>
                <div className="">
                  <CalPlanner
                    className={props.className}
                    onClick={props.onClick}
                    article={props.article}
                    articles={props.articles}
                  />
                </div>

                <Cal
                  d={props.d}
                  selectedMonth={props.selectedMonth}
                  selectedYear={props.selectedYear}
                  onClick={props.onClick}
                  selected={selected}
                  theme={theme}
                />
              </React.Fragment>
            ) : null}
          </main>
        </div>
        <legend>Time To Plan!</legend>
      </fieldset>

      <fieldset>
        <article />
        <legend>TBD!</legend>
      </fieldset>

      <fieldset>
        <legend>TBD!</legend>
      </fieldset>
    </section>
  );
}

export default RightContainerWCMP;
