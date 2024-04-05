import React from "react";
import Header from "../Header";
import Animation from "../Animation";
import "./index.css";
import GameItem from "../GameItem";
const games = [
  "Flip the Card - Similar Words",
  "Flip the Card - Oppposite Words",
  "Match Similar Words",
  "Match Opposite Words",
];
function Games() {
  return (
    <div className="app-container">
      <Header />
      <Animation />
      <h1 className="games">Games</h1>
      <ul>
        {games.map((eachItem) => (
          <GameItem game={eachItem} />
        ))}
      </ul>
    </div>
  );
}

export default Games;
