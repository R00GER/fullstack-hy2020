import React, { useState } from 'react';
import { useQuery, useApolloClient, useSubscription } from '@apollo/client';
import { ALL_AUTHORS_AND_BOOKS, BOOK_ADDED } from './queries';
import Navigation from './components/Navigation';
import Authors from './components/Authors';
import Books from './components/books/Books';
import NewBook from './components/NewBook';
import Recommend from './components/Recommend';
import Login from './components/Login';

const App = () => {
  const [page, setPage] = useState('authors');
  const [token, setToken] = useState(null);
  const result = useQuery(ALL_AUTHORS_AND_BOOKS);
  const client = useApolloClient();

  const updateCacheWith = (addedBook) => {
    const includedIn = (set, object) => set.map((p) => p.id).includes(object.id);

    const dataInStore = client.readQuery({ query: ALL_AUTHORS_AND_BOOKS });
    if (!includedIn(dataInStore.allBooks, addedBook)) {
      client.writeQuery({
        query: ALL_AUTHORS_AND_BOOKS,
        data: { allBooks: dataInStore.allBooks.concat(addedBook) },
      });
    }
  };

  useSubscription(BOOK_ADDED, {
    onSubscriptionData: ({ subscriptionData }) => {
      const addedBook = subscriptionData.data.bookAdded;
      alert(`${addedBook.title} added`);
      updateCacheWith(addedBook);
    },
  });

  const handlePage = (value) => {
    setPage(value);
  };

  if (result.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navigation handlePage={handlePage} token={token} />
      <Authors show={page === 'authors'} authors={result.data.allAuthors} token={token} />
      <Books show={page === 'books'} books={result.data.allBooks} />
      <NewBook show={page === 'add'} />
      <Recommend show={page === 'recommend'} books={result.data.allBooks} />
      <Login show={page === 'login'} setToken={setToken} />
    </div>
  );
};

export default App;
