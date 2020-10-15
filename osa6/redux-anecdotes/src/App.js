import React, { useEffect } from 'react';
import Filter from './components/Filter';
import Notification from './components/Notification';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import { useDispatch } from 'react-redux';
import { initializeAnecdotes } from './reducers/anecdoteReducer';

const App = () => {
const dispatch = useDispatch();

  useEffect(() => {
      dispatch(initializeAnecdotes());
  }, [dispatch])

  return (
    <div className="app">
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
