import React, { Component } from 'react';
import { FeedbackSet, Section, Statistic, Notification } from './Compon';


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  total = 0;
  positivePercentage = null;

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const { total } = this;

    if (!total) return;

    this.positivePercentage = parseInt((good / total) * 100);
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    this.total = good + neutral + bad;
  };

  onFeedbackClicked = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  onRender() {
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }
  render() {
    this.onRender();
    const { good, neutral, bad } = this.state;
    const { total, positivePercent } = this;
    return (
      <>
        <Section title="Please leave a feedback">
          <FeedbackSet
            options={Object.keys(this.state)}
            onLeaveFeedBack={this.onFeedbackClicked}
          />
        </Section>

        <Section title="Statistic">
          {total ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercent={positivePercent}
          />
          ) : (<Notification message="There is no feedback" />)}
        </Section>
      </>
    );
  };
};
