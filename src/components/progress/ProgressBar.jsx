/* Importing dependencess */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
/* Importing styles */
import './ProgressBar.scss'

const ProgressBar = ({ onProgressFinish }) => {
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        let timeoutId;

        if (!finished) {
            timeoutId = setTimeout(() => {
                setFinished(true);
                onProgressFinish('O tempo expirou!');
            }, 10000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [finished, onProgressFinish]);

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