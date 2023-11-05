import React from "react";
import { GameOverBoardProps } from "../../interfases/GameOverBoardProps";
import "./GameOverBoard.css";

const GameOverBoard: React.FC<GameOverBoardProps> = ({ startFn, tSpeed,  name, speed }) => {

  const handleTSpeedClick = () => {
    tSpeed(name, speed);
  };

  return (
    <div className="gameOverBoard">
      <p className="text-start">TOTAL SPEED: {speed}</p>
      <button onClick={startFn}>START</button>
      <button onClick={handleTSpeedClick}>Submit Score</button>
    </div>
  );
};

export default GameOverBoard;
