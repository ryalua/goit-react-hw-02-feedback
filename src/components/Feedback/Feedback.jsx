import React from 'react';
import PropTypes from 'prop-types';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleCountGood = event => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  hendleCountNeutral = event => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  hendleCountBad = event => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      (this.state.good * 100) /
      (this.state.good + this.state.neutral + this.state.bad)
    );
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.hendleCountGood}>
          Good
        </button>
        <button type="button" onClick={this.hendleCountNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.hendleCountBad}>
          Bad
        </button>

        <h3>Statistics</h3>
        <p>
          <span>Good: {this.state.good}</span>
        </p>
        <p>
          <span>Neutral: {this.state.neutral}</span>
        </p>
        <p>
          <span>Bad: {this.state.bad}</span>
        </p>
        <p>
          <span>Total: {this.countTotalFeedback()}</span>
        </p>
        <p>
          <span>
            Positive feedback:{' '}
            {Math.round(this.countPositiveFeedbackPercentage())}%
          </span>
        </p>
      </div>
    );
  }
}

export default Feedback;
