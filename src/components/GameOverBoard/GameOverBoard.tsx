import { FC, useState } from "react";
import { GameOverBoardProps } from "../../interfases/IGameProps";
import "./GameOverBoard.css";

const GameOverBoard: FC<GameOverBoardProps> = ({ startFn, tSpeed }) => {
  // const [name, setName] = useState<string>('');
  // const [speed, setSpeed] = useState<number>(0);

  const handleTSpeedClick = () => {
    tSpeed(); 
  }; 

  return (
    <div className="gameOverBoard">
      <p className="text-start">TOTAL SPEED: {tSpeed}</p>
      <button onClick={startFn}>START</button>
      <button onClick={handleTSpeedClick}>Submit Score</button>
    </div>
  );
};

export default GameOverBoard;
