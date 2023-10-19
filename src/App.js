import React, { Component } from "react";
import Buttons from "./components/buttons/Buttons";
import Notification from "./components/notification/Notification";
import Statisctick from "./components/statistick/Statisctick";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = (e) => {
    const { name } = e.target;
    this.setState((prev) => ({
      [name]: prev[name] + 1,
    }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedback = () => {
    const { good } = this.state;
    const total = this.totalFeedback();
    return Math.round((good * 100) / total);
  };

  render() {
    const { state, onClick, totalFeedback, positiveFeedback } = this;
    const { good, neutral, bad } = state;

    const buttonNames = Object.keys(state);
    const total = totalFeedback();
    const positive = positiveFeedback();

    return (
      <>
        <div>Leave you feedback</div>
        <Buttons data={buttonNames} onClick={onClick} />

        {total > 0 ? (
          <>
            <div>Statisctick</div>
            <Statisctick
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          </>
        ) : (
          <Notification message="no feedback" />
        )}
      </>
    );
  }
}

// rcc
