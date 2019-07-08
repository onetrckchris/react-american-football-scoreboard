//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [LionsScore, setLionsScore] = useState(0);
  const [TigersScore, setTigersScore] = useState(0);
  const [GameQuarter, setGameQuarter] = useState(1);

  const changeQuarter = () => {
    if(GameQuarter < 4) {
      setGameQuarter(GameQuarter + 1);
    } else {
      setGameQuarter(1);
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Home</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{LionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Guest</h2>
            <div className="away__score">{TigersScore}</div>
          </div>
        </div>
        <BottomRow gameQuarter={GameQuarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setLionsScore(LionsScore + 6)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setLionsScore(LionsScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setTigersScore(TigersScore + 6)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setTigersScore(TigersScore + 3)}>Away Field Goal</button>
        </div>
        <button className="changeQuarter" onClick={changeQuarter}>Change Quarter</button>
      </section>
    </div>
  );
}

export default App;
