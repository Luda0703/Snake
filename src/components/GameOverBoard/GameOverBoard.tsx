import { FC } from "react";
import { GameOverBoardProps } from "../../interfases/IGameProps";
import "./GameOverBoard.css";

const GameOverBoard: FC<GameOverBoardProps> = ({ startFn, tSpeed }) => {
  const handleTSpeedClick = () => {
    tSpeed();
  };

  const totalSpeed = () => {
    tSpeed();
  }

  return (
    <div className="gameOverBoard">
      <p className="text-start">TOTAL SPEED: {totalSpeed}</p>
      <button onClick={startFn}>START</button>
      <button onClick={handleTSpeedClick}>Submit Score</button>
    </div>
  );
};

export default GameOverBoard;
