import { Notification } from "./Notification";
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
  total === 0 ? (
    <div>
  < Notification/>
    </div>
      ) : (
    <ul>
    <li className={css.item}><span className={css.bold}>Good:</span><span>{good}</span></li>
    <li className={css.item}><span className={css.bold}>Neutral:</span><span>{neutral}</span></li>
    <li className={css.item}><span className={css.bold}>Bad:</span><span>{bad}</span></li>
    <li className={css.item}><span className={css.bold}>Total:</span><span>{total}</span></li>
    <li className={css.item}><span className={css.bold}>Positive feedback:</span><span>{positivePercentage}</span></li>
    </ul >
  )
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};