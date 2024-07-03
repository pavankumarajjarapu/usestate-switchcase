import React, { useState } from "react";
import NavBar from "./NavBar";

function CricketScore() {
  let [score, setScore] = useState(0);
  let [singles, setSingles] = useState(0);
  let [twos, setTwos] = useState(0);
  let [threes, setThrees] = useState(0);
  let [fours, setFours] = useState(0);
  let [sixes, setSixes] = useState(0);
  let [balls, setBalls] = useState(0);
  let [wides, setWideBalls] = useState(0);
  let [noballs, setNoballs] = useState(0);
  //   let [overs, setOvers] = useState();

  return (
    
    <div>
        <NavBar></NavBar>
      <div className="bgContainer">
        <div className="bottomContainer">
          <div>
            <h1>Cricket Score Card</h1>
          </div>
          <h2> Score:{score}</h2>
          <h2>Singles:{singles}</h2>
          <h2> Twos:{twos}</h2>
          <h2> Threes:{threes}</h2>
          <h2> Fours:{fours}</h2>
          <h2> Sixes:{sixes}</h2>
          <h2> NoballS:{noballs}</h2>
          <h2> Wides:{wides}</h2>
          <h2> Balls:{balls}</h2>
          <h2> Overs:{parseInt(balls / 6)}</h2>
          <h2> CurrentOver:{balls % 6}</h2>
          <button
            onClick={() => {
              setSingles(singles + 1);
              setBalls(balls + 1);
              setScore(score + 1);
            }}
          >
            {" "}
            Singles
          </button>
          <button
            onClick={() => {
              setTwos(twos + 1);
              setScore(score + 1);
              setBalls(balls + 1);
            }}
          >
            {" "}
            Twos
          </button>
          <button
            onClick={() => {
              setThrees(threes + 1);
              setBalls(balls + 1);
              setScore(score + 1);
            }}
          >
            Threes
          </button>
          <button
            onClick={() => {
              setFours(fours + 1);
              setBalls(balls + 1);
              setScore(score + 4);
            }}
          >
            Fours
          </button>
          <button
            onClick={() => {
              setSixes(sixes + 1);
              setBalls(balls + 1);
              setScore(score + 6);
            }}
          >
            Sixes
          </button>
          <button
            onClick={() => {
              setWideBalls(wides + 1);
              
              setScore(score + 1);
            }}
          >
            Wides
          </button>
          <button
            onClick={() => {
              setNoballs(noballs + 1);
              
              setScore(score + 1);
            }}
          >
            No-balls
          </button>
        </div>
      </div>
    </div>
  );
}

export default CricketScore;
