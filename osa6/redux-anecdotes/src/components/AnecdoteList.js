import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { createVoteNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filterReducer === 'ALL') {
      return state.anecdoteReducer;
    }

    const filteredAnecdotes = state.anecdoteReducer
      .map((anecdote) => ({ ...anecdote, content: anecdote.content.toLowerCase() }))
      .filter((anecdote) => anecdote.content.includes(state.filterReducer.toLowerCase()));

    return state.anecdoteReducer.filter((anecdote) =>
      filteredAnecdotes.some((filteredAnecdote) => filteredAnecdote.id === anecdote.id)
    );
  });

  const dispatch = useDispatch();

  const buttonStyles = {
    padding: '.2rem 1rem',
    backgroundColor: '#fff',
    border: '1px solid lightgrey',
    borderRadius: '5px',
  };

  const vote = (id) => {
    const votedAnecdote = anecdotes.find((anecdote) => anecdote.id === id);
    
    dispatch(voteAnecdote(votedAnecdote));
    dispatch(createVoteNotification(`you voted '${votedAnecdote.content}'`, 3));
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
