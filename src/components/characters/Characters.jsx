/* Importing dependences */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
/* Importing components */
import Character from '../character/Character'
/* Importing styles */
import './Characters.scss'

const Characters = ({successAction, loserAction}) => {
    const [characters, setCharacters] = useState('000000');
    const [inputValue, setInputValue] = useState(0);
    const [keyStatus, setKeyStatus] = useState(Array(6).fill(false));

    /* Function go to the game screen, generate random numbers, start the counter, start the logic.  */
    const startMiniGame = () => {
        let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

        let scrambledCharacters = '';
        while(characters.length > 0){
            const randomIndex = Math.floor(Math.random() * characters.length);
            scrambledCharacters += characters[randomIndex];
            characters = characters.slice(0, randomIndex) + characters.slice(randomIndex + 1);
        }

        let randomCharacters = '';
        for(let i = 0; i < 6; i++){
            const randomIndex = Math.floor(Math.random() * scrambledCharacters.length);
            randomCharacters += scrambledCharacters[randomIndex];
        }

        setCharacters(randomCharacters);
    };

    useEffect(() => {
        startMiniGame();
    }, []);

    /* Responsible for checking whether the user typed the keys in the correct order and directing them. */
    const handleKeyDown = (event) => {
        const keyPressed = event.key;

        if (keyPressed === characters[inputValue]) {
            const updatedKeyStatus = [...keyStatus];
            updatedKeyStatus[inputValue] = true;
            setKeyStatus(updatedKeyStatus);

            setInputValue(prevValue => prevValue + 1);

            if (inputValue === 5) {
                successAction()
            }
        } else {
            loserAction('Você falhou!')
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [characters, inputValue, keyStatus]);

    return (
        <div className='characters'>
            <Character character={characters[0]} correct={keyStatus[0]} />
            <Character character={characters[1]} correct={keyStatus[1]} />
            <Character character={characters[2]} correct={keyStatus[2]} />
            <Character character={characters[3]} correct={keyStatus[3]} />
            <Character character={characters[4]} correct={keyStatus[4]} />
            <Character character={characters[5]} correct={keyStatus[5]} />
        </div>
    );
}

Characters.propTypes = {
    successAction: PropTypes.string.isRequired,
    loserAction: PropTypes.bool.isRequired
};

export default Characters;