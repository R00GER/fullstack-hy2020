import React, { useState } from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

import Header from './components/Header';
import Menu from './components/Menu';
import Notification from './components/Notification';
import About from './pages/About';
import AnecdoteList from './pages/AnecdoteList';
import Anecdote from './components/Anecdote';
import CreateNew from './pages/createNew';
import Footer from './components/Footer';
import { initialAnecdotes } from './anecdotes';

const App = () => {
  const [anecdotes, setAnecdotes] = useState(initialAnecdotes);
  const [notification, setNotification] = useState('');

  const history = useHistory();
  const match = useRouteMatch('/anecdotes/:id');
  const anecdote = match ? anecdotes.find((anecdote) => anecdote.id === match.params.id) : null;

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0);
    setAnecdotes(anecdotes.concat(anecdote));
    setNotification(`a new anecdote ${anecdote.content} created`);
    setTimeout(() => {
      setNotification('');
    }, 10000);
    history.push('/');
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  return (
    <div>
      <Header headerText="Software anecdotes" />
      <Menu />
      <Notification notification={notification} />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/create">
          <CreateNew addNew={addNew} />
        </Route>
        <Route path="/anecdotes/:id">
          <Anecdote anecdote={anecdote} vote={vote} />
        </Route>
        <Route path="/">
          <AnecdoteList anecdotes={anecdotes} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
