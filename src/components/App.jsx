import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* <Section title="">
           <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions>
          <Statistics good={} neutral={} bad={} total={} positivePercentage={}>
       
         </Section> */}
      </div>
    );
  }
}

export { App };
