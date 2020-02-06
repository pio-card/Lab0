import React from "react";
import PunchIn from "./PunchIn";
import PunchOut from "./PunchOut";
import Stopwatch from "./Stopwatch";
import Clipart from "../punchcardclipart.png";

function RightContainerDP() {
  return (
    <section className="rightContainer">
      <fieldset>
        <div class="flex-container">
          <div>
            <PunchIn />
          </div>

          <div>
            <img src={Clipart} width="136" height="135" alt="" />
          </div>

          <div>
            <PunchOut />
          </div>
        </div>
        <legend>Time To Work!</legend>
      </fieldset>

      <fieldset>
        <article />
        <legend>Your Stats!</legend>
      </fieldset>

      <fieldset>
        <div className="Watch">
          <div className="watch-title">Timers Demo</div>
          <div className="Timers">
            <Stopwatch />
          </div>
        </div>
        <legend>Your StopWatch!</legend>
      </fieldset>
    </section>
  );
}

export default RightContainerDP;
