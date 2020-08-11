import React from "react";
import Country from "./Country";
import Weather from "../containers/Weather";

const CountryFull = ({ filteredCountries }) => {
  const country = filteredCountries[0];
  const alpha3Code = country.alpha3Code.toLowerCase();

  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {country.languages.map((lang) => {
          return <li key={lang.name}>{lang.name}</li>;
        })}
      </ul>
      <img
        style={{ width: 100 }}
        src={`https://restcountries.eu/data/${alpha3Code}.svg`}
        alt="flag"
      />
      <Weather filteredCountries={filteredCountries} />
    </div>
  );
};

const Countries = ({ filteredCountries, handleOnClickSearch }) => {
  if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    return (
      <div>
        {filteredCountries.map((country) => {
          return (
            <Country
              key={country.name}
              country={country}
              handleOnClickSearch={handleOnClickSearch}
            />
          );
        })}
      </div>
    );
  } else if (filteredCountries.length === 1) {
    return <CountryFull filteredCountries={filteredCountries} />;
  } else {
    return <div>No matches</div>;
  }
};

export default Countries;
