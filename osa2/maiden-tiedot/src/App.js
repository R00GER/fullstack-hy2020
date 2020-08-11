import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState();  

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setAllCountries(response.data);
    });
  }, []);

  useEffect(() => {
    filter();
  }, [search]);

  const handleSearch = (event) => {    
    const searchWord = event.target.value;
    setSearch(searchWord);
  };

  const handleOnClickSearch = (country) => {
    setSearch(country.name);
  };

  const filter = () => {
    const filtered = allCountries.filter((filteredCountry) =>
      filteredCountry.name.includes(search)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div>
      find countries <input onChange={handleSearch} />
      <Countries
        filteredCountries={filteredCountries} handleOnClickSearch={handleOnClickSearch}
      />
    </div>
  );
};

export default App;
