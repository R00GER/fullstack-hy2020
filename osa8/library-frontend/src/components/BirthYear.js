import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BORNYEAR, ALL_AUTHORS_AND_BOOKS } from '../queries';
import Select from 'react-select';

const BirthYear = ({ authors }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [bornYear, setBornYear] = useState('');
  const [editAuthor] = useMutation(ADD_BORNYEAR, {
    refetchQueries: [ { query: ALL_AUTHORS_AND_BOOKS } ]
   });

  const options = authors.map((author) => ({ value: author.name, label: author.name }));

  const updateBornYear = async (e) => {
    e.preventDefault();

    editAuthor({ variables: { name: selectedOption.value, setBornTo: bornYear } })
    setBornYear('');
  }

  return (
    <>
      <h2>Set bornYear</h2>
      <form onSubmit={updateBornYear}>
        <Select
          options={options}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
        />
        <label htmlFor="born">
          Bornyear:
          <input
            name="born"
            type="number"
            value={bornYear}
            style={{ margin: '1rem 0 0 .5rem' }}
            onChange={(e) => setBornYear(+e.target.value)}
          />
        </label>
        <button type="submit">update author</button>
      </form>
    </>
  );
};

export default BirthYear;
