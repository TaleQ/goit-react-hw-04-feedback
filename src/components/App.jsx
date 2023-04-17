import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };
  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        return setGood(n => n + 1);
      case 'neutral':
        return setNeutral(n => n + 1);
      case 'bad':
        return setBad(n => n + 1);
      default:
        return null
    }
  };
  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback =
      Math.round((good * 100) / countTotalFeedback()) + '%';
    return positiveFeedback;
  };
  return (
    <div className={css.app}>
      <h1 className={css.title}>Expresso Cafe</h1>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    </div>
  );
};
