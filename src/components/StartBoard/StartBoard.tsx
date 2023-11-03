import { FC } from "react";
import IStartBoardProps from '../../interfases/IStartBoardProps'
import "./StartBoard.css";

const StartBoard: FC<IStartBoardProps> = ({ startFn, tSpeed }) => {
  return (
    <div className="startBoard">
      <p className="text-start">PRESS START TO PLAY</p>
      <button onClick={startFn}>START</button>
      <p className="text-start">TOTAL SPEED: {tSpeed}</p>
    </div>
  );
};

export default StartBoard;
