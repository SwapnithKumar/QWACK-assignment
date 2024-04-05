import React from "react";
import "./index.css";

function GameItem(props) {
  const { game } = props;
  return <li className="game-item">{game}</li>;
}

export default GameItem;
