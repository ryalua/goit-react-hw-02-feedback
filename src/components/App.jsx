import React from 'react';
// import Feedback from 'components/Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleCountGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  hendleCountNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  hendleCountBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            hendleCountGood={this.hendleCountGood}
            hendleCountNeutral={this.hendleCountNeutral}
            hendleCountBad={this.hendleCountBad}
          />
        </Section>
        <Section title={'Statistics'}>
          {(this.state.good || this.state.neutral || this.state.bad) !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}
