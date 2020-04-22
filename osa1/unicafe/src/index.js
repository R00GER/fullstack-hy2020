import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const HeaderText = () => {
  return (
    <div>
      <h1>give feedback</h1>
    </div>
  );
};

const ButtonGood = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const ButtonNeutral = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const ButtonBad = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistics = (props) => {
  let sumOfFeedbacks = 0;

  props.allFeedbacks.forEach((item, index) => {
    sumOfFeedbacks += props.allFeedbacks[index];
  });

  const average = sumOfFeedbacks / props.allFeedbacks.length;
  const positives = props.allFeedbacks.filter((item) => item === 1);
  const positiveRate = (positives.length / props.allFeedbacks.length) * 100;

  if (props.allFeedbacks.length === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.allFeedbacks.length} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positiveRate + " %"} />
      </div>
    );
  }
};

const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allFeedbacks, setAll] = useState([]);

  // VAIHTOEHTOINEN TAPA STATISTICS KOMPONENTISSA LASKETUILLE
  //   const average = (good - bad) / allFeedbacks.length;
  //   const positive = (good / allFeedbacks.length) * 100;

  const countGoodFeedbacks = (feedback) => {
    setGood(feedback);
    setAll(allFeedbacks.concat(1));
  };

  const countNeutralFeedbacks = (feedback) => {
    setNeutral(feedback);
    setAll(allFeedbacks.concat(0));
  };

  const countBadFeedbacks = (feedback) => {
    setBad(feedback);
    setAll(allFeedbacks.concat(-1));
  };

  return (
    <div className="container">
      <HeaderText />
      <ButtonGood
        handleClick={() => {
          countGoodFeedbacks(good + 1);
        }}
        text="good"
      />
      <ButtonNeutral
        handleClick={() => {
          countNeutralFeedbacks(neutral + 1);
        }}
        text="neutral"
      />
      <ButtonBad
        handleClick={() => {
          countBadFeedbacks(bad + 1);
        }}
        text="bad"
      />
      <Statistics
        allFeedbacks={allFeedbacks}
        good={good}
        neutral={neutral}
        bad={bad}
        // average={average}
        // positive={positive}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
