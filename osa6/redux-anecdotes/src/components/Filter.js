import React from 'react';
import { useDispatch } from 'react-redux';
import { filterAnecdotes } from '../reducers/filterReducer';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(filterAnecdotes(event.target.value));
  };

  return (
    <div className="filter" style={{marginBottom: '.5rem'}}>
      <label htmlFor="name">
        filter&nbsp;
        <input onChange={handleFilter} name="filter" />
      </label>
    </div>
  );
};

export default Filter;
