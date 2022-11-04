import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { Component } from 'react';
import { FeedbackSet, Section, Statistic, Notification } from './Compon';


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

   onFeedbackClicked = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

   countTotalFeedback() {
     return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage() {
    return (
      Math.round((this.state.good) / this.countTotalFeedback() * 100)
    );
  }

  render() {
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave a feedback">
          <FeedbackSet
            options={Object.keys(this.state)}
            onLeaveFeedBack={this.onFeedbackClicked}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          ) : (<Notification message="There is no feedback" />)}
        </Section>
      </>
    );
  };
};
