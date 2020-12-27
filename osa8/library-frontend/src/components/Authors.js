import React, { useState } from 'react';
import BirthYear from './BirthYear';

const Authors = ({ show, authors }) => {
  // const options = {

  // }

  if (!show) {
    return null;
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <BirthYear authors={authors} />
    </div>
  );
};

export default Authors;
