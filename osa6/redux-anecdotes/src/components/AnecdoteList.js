import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const buttonStyles = {
    padding: '.2rem 1rem',
    backgroundColor: '#fff',
    border: '1px solid lightgrey',
    borderRadius: '5px',
  };

  console.log(anecdotes);
  const vote = (id) => {
    dispatch(voteAnecdote(id));
  };

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div style={{ paddingBottom: '1rem' }} key={anecdote.id}>
            <div style={{ paddingBottom: '.5rem' }}>{anecdote.content}</div>
            <div className="votes" style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '.5rem' }}>has {anecdote.votes}</div>
              <div>
                <button style={buttonStyles} onClick={() => vote(anecdote.id)}>
                  vote
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnecdoteList;
