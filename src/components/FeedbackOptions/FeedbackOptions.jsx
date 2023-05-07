import PropTypes from 'prop-types';
// import {} from './FeedbackOptionsStyled';

export const FeedbackOptions = ({
  hendleCountGood,
  hendleCountNeutral,
  hendleCountBad,
}) => (
  <div>
    <button type="button" onClick={hendleCountGood}>
      Good
    </button>
    <button type="button" onClick={hendleCountNeutral}>
      Neutral
    </button>
    <button type="button" onClick={hendleCountBad}>
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  hendleCountGood: PropTypes.func,
  hendleCountNeutral: PropTypes.func,
  hendleCountBad: PropTypes.func,
};
