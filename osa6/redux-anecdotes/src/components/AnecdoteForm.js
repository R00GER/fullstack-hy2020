import React from 'react';
import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { createAnecdoteNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    props.createAnecdote(content)
    props.createAnecdoteNotification(`you created anecdote '${content}'`, 5)
  }

  return (
    <div className="anecdote-form">
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    anecdote: state.anecdoteReducer,
  }
}

const mapDispatchToProps = {
  createAnecdote,
  createAnecdoteNotification,
}

const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdotes;
