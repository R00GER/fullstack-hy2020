import React from 'react';

const GenreFilters = ({ books, filterBooks }) => {
  const genres = [...new Set(books)].flatMap((book) => book.genres);

  return (
    <div>
      {genres.map((genre) => (
        <button key={genre} onClick={() => filterBooks(genre)}>
          {genre}
        </button>
      ))}
      <button onClick={() => filterBooks('all genres')}>all genres</button>
    </div>
  );
};

export default GenreFilters;
