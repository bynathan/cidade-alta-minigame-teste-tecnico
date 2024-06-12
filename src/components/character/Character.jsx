/* Importing dependences */
import PropTypes from 'prop-types';
/* Importing styles */
import './Character.scss'

const Character = ({ character, correct }) => {
    const classes = `character ${correct && 'correct'}`;

    return (
        <section className={classes}>
            {character}
        </section>
    );
}

Character.propTypes = {
    character: PropTypes.string.isRequired,
    correct: PropTypes.bool.isRequired
};

export default Character;