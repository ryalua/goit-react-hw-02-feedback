import PropTypes from 'prop-types';
import { Stat, StatText } from './StatisticsStyled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <Stat>
    <StatText>
      <span>Good: {good}</span>
    </StatText>
    <StatText>
      <span>Neutral: {neutral}</span>
    </StatText>
    <StatText>
      <span>Bad: {bad}</span>
    </StatText>
    <StatText>
      <span>Total: {total}</span>
    </StatText>
    <StatText>
      <span>Positive feedback: {positivePercentage}%</span>
    </StatText>
  </Stat>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
