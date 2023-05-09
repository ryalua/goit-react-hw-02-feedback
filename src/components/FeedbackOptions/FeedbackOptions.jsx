import PropTypes from 'prop-types';
import { Button } from './FeedbackOptionsStyled';

export const FeedbackOptions = ({ onCount }) => (
  <Button>
    <button type="button" onClick={() => onCount('good')}>
      Good
    </button>
    <button type="button" onClick={() => onCount('neutral')}>
      Neutral
    </button>
    <button type="button" onClick={() => onCount('bad')}>
      Bad
    </button>
  </Button>
);

FeedbackOptions.propTypes = {
  onCountGood: PropTypes.func,
  onCountNeutral: PropTypes.func,
  onCountBad: PropTypes.func,
};
