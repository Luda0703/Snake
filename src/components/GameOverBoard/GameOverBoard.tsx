import { FC, useState} from "react";
import { GameOverBoardProps } from "../../interfases/IGameProps";
import "./GameOverBoard.css";

const GameOverBoard: FC<GameOverBoardProps> = ({ startFn, tSpeed, name, speed }) => {
  // const [speed, setSpeed] = useState<number>(0);
  // const [name, setName] = useState<string>("");

  const handleTSpeedClick = () => {
    // setName(name);
    // setSpeed(speed);
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
