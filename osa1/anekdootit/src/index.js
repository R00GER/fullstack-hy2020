import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Anecdotes = (props) => {
  if (props.votes === undefined) {
    return (
      <div>
        <h1 style={{ marginBottom: "1em" }}>Anecdote of the day</h1>
        <p>{props.anecdotes}</p>
        <p style={{ marginBottom: "1em" }}>has 0 votes</p>;
      </div>
    );
  } else {
    return (
      <div>
        <h1 style={{ marginBottom: "1em" }}>Anecdote of the day</h1>
        <p>{props.anecdotes}</p>
        <p style={{ marginBottom: "1em" }}>has {props.votes} votes</p>;
      </div>
    );
  }
};

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  );
};

const MostVotedAnecdote = (props) => {
  const mostVotes = Math.max(...props.votes);
  const index = props.votes.indexOf(mostVotes);

  if (index === -1) {
    return (
      <div>
        <h1>Anecdote with most votes</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{props.anecdotes[index]}</p>
        <p>has {props.votes[index]} votes</p>
      </div>
    );
  }
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState([]);

  const generateAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  let votesCopy = [...votes];

  const voteAnecdote = () => {
    if (votesCopy.length === 0) {
      votesCopy = Array(6).fill(0);
    }
    votesCopy[selected] += 1;
    setVote(votesCopy);
  };

  return (
    <div className="container">
      <Anecdotes anecdotes={anecdotes[selected]} votes={votes[selected]} />
      <div style={{ display: "flex" }}>
        <Button
          handleClick={() => {
            voteAnecdote();
          }}
          text="vote"
        />
        <Button
          handleClick={() => {
            generateAnecdote();
          }}
          text="next anecdote"
        />
      </div>
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
