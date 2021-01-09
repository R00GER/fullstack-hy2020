import React from 'react';
import { useQuery } from '@apollo/client';
import { ME } from '../queries';

const Recommend = ({ show, books }) => {
  const result = useQuery(ME);

  if (result.loading) {
    return <div>loading...</div>;
  }

  const favoriteGenre = result.data.me.favoriteGenre;
  const recommendedBooks = books.filter((book) => book.genres.includes(favoriteGenre));

  if (!show) {
    return null;
  }

  return (
    <div>
      <h1>recommendations</h1>
      <div style={{ marginBottom: '1rem' }}>
        books in your favorite genre <strong>{favoriteGenre}</strong>
      </div>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {recommendedBooks.map((book) => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.author.name}</td>
              <td>{book.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recommend;
