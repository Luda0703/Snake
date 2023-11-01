import {FC} from 'react';
import { IGameProps } from '../../interfases/IGameProps';
import './StartBoard.css'

const StartBoard: FC<IGameProps> = ({ startFn, tSpeed }) => {
    return (
        <div className="startBoard">
            <p className="text-start">PRESS START TO PLAY</p>
            <button onClick={startFn}>START</button>
            <p className="text-start">TOTAL SPEED: {tSpeed}</p>
          </div>

    )
}

export default StartBoard;