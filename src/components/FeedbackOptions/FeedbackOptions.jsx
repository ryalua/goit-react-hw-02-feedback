import PropTypes from 'prop-types';
import { Button } from './FeedbackOptionsStyled';

export const FeedbackOptions = ({
  onCountGood,
  onCountNeutral,
  onCountBad,
}) => (
  <Button>
    <button type="button" onClick={onCountGood}>
      Good
    </button>
    <button type="button" onClick={onCountNeutral}>
      Neutral
    </button>
    <button type="button" onClick={onCountBad}>
      Bad
    </button>
  </Button>
);

FeedbackOptions.propTypes = {
  onCountGood: PropTypes.func,
  onCountNeutral: PropTypes.func,
  onCountBad: PropTypes.func,
};
