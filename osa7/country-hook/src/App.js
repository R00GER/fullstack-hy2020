import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

const useCountry = (name) => {
  const [searchedCountry, setSearchedCountry] = useState(null);
  const [found, setFound] = useState(false);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
        );
        setSearchedCountry(response.data[0]);
        setFound(true);
      } catch (error) {
        setSearchedCountry('not found');
        setFound(false)
      }
    };

    if (name) {
      getCountry();
    }
  }, [name]);

  return {
    searchedCountry,
    found,
  };
};

const Country = ({ country }) => {
  if (!country.searchedCountry) {
    return null;
  }

  if (!country.found) {
    return <div>not found...</div>;
  }

  return (
    <div>
      <h3>{country.searchedCountry.name} </h3>
      <div>capital {country.searchedCountry.capital} </div>
      <div>population {country.searchedCountry.population}</div>
      <img src={country.searchedCountry.flag} height="100" alt={`flag of ${country.searchedCountry.name}`} />
    </div>
  );
};

const App = () => {
  const nameInput = useField('text');
  const [name, setName] = useState('');
  const country = useCountry(name);

  const fetch = (e) => {
    e.preventDefault();
    setName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  );
};

export default App;
