/* Importing dependences */
import PropTypes from 'prop-types';
/* Importing styles */
import './Button.scss'
/* Importing images */
import borderButton from '../../assets/images/borderButton.png';

const Button = ({ name, onClick }) => {
    return (
        <button onClick={onClick}>
            <img src={borderButton} alt="" />
            {name}
        </button>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;