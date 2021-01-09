import React, { useState } from 'react';
import GenreFilters from './GenreFilters';

const Books = ({ show, books }) => {
  const [filter, setFilter] = useState('all genres');

  if (!show) {
    return null;
  }

  const filterBooks = (genre) => {
    setFilter(genre);
  };

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {filter === 'all genres'
            ? books.map((a) => (
                <tr key={a.title}>
                  <td>{a.title}</td>
                  <td>{a.author.name}</td>
                  <td>{a.published}</td>
                </tr>
              ))
            : books.map(
                (a) =>
                  a.genres.includes(filter) && (
                    <tr key={a.title}>
                      <td>{a.title}</td>
                      <td>{a.author.name}</td>
                      <td>{a.published}</td>
                    </tr>
                  )
              )}
        </tbody>
      </table>
      <GenreFilters books={books} filterBooks={filterBooks} />
    </div>
  );
};

export default Books;
