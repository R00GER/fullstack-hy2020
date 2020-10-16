import React from 'react';

const Anecdote = ({ anecdote, vote }) => (
  <div>
    <h2>{anecdote.content}</h2>
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <div style={{ marginBottom: '.5rem' }}>{`has ${anecdote.votes} votes`}</div>
      <button
        style={{ marginLeft: '.5rem', backgroundColor: '#fff', border: '1px solid lightgrey' }}
        onClick={() => vote(anecdote.id)}
      >
        vote
      </button>
    </div>
    <span>for more info see </span>
    <a rel="noopener noreferrer" target="_blank" href={anecdote.info}>
      {anecdote.info}
    </a>
  </div>
);

export default Anecdote;
