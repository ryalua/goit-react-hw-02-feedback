import PropTypes from 'prop-types';
// import {} from './components/Statistics/Styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <p>
      <span>Good: {good}</span>
    </p>
    <p>
      <span>Neutral: {neutral}</span>
    </p>
    <p>
      <span>Bad: {bad}</span>
    </p>
    <p>
      <span>Total: {total}</span>
    </p>
    <p>
      <span>Positive feedback: {positivePercentage}%</span>
    </p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
