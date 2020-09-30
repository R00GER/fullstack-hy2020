import React from 'react';
import Filter from './components/Filter';
import Notification from './components/Notification';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

const App = () => (
  <div className="app">
    <h2>Anecdotes</h2>
    <Notification />
    <Filter />
    <AnecdoteList />
    <AnecdoteForm />
  </div>
);

export default App;
