import React, { FC } from 'react';
import {IPauseButtonProps} from '../../interfases/IPauseButtonProps';

const PauseButton: FC<IPauseButtonProps> = ({ isPaused, togglePause, updateGame }) => {
    
    const handlePauseClick = () => {
        togglePause(!isPaused);
        updateGame;
      };

    return (
        <>
        <button onClick={handlePauseClick}>
        {isPaused ? 'CONTINUE' : 'PAUSE'}
            </button>
        </>
    )
}

export default PauseButton;