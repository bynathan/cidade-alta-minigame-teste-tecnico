/* Importing dependencess */
import { useState } from 'react';
import PropTypes from 'prop-types';
/* Importing styles */
import './ProgressBar.scss'

const ProgressBar = ({ onProgressFinish }) => {
    const [finished, setFinished] = useState(false);

    if(!finished){
        setTimeout(() => {
            setFinished(true);
            onProgressFinish('O tempo expirou!');
        }, 10000)
    }

    return (
        <div className='progress'>
            <div className={`progress-bar ${finished && 'finished'}`}></div>
        </div>
    );
}

ProgressBar.propTypes = {
    onProgressFinish: PropTypes.func.isRequired
};

export default ProgressBar;