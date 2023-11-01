import { FC } from "react";
import { IGameProps } from "../../interfases/IGameProps";
import "./GameOverBoard.css";

const GameOverBoard: FC<IGameProps> = ({ startFn }) => {
  return (
    <div className="gameOverBoard">
      {/* <h2 className="game-over">GAME OVER</h2> */}
      {/* <p className="text-start">PRESS START TO PLAY</p> */}
      

      {/* <p className="text-start">TOTAL SPEED: {tSpeed}</p> */}
      <button onClick={startFn}>START</button>
    </div>
  );
};

export default GameOverBoard;
