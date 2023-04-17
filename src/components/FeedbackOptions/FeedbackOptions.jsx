import css from './FeedbackOptions.module.css'
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.btnList}>
    {options.map((option, index) => { return (<li key={index}><button className={css.btn} onClick={() => onLeaveFeedback(option)}>{capitalizeLetter(option)}</button></li>)})}
  </ul>
);

function capitalizeLetter (word) {
return word.charAt(0).toUpperCase()
  + word.slice(1)
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
