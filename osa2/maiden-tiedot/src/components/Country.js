import React from "react";
import Button from './Button'

const Country = (props) => {
  return (
    <div key={props.country.name} style={{ display: "flex" }}>
      <p>{props.country.name}</p>
      <Button text="show" onClick={props.handleOnClickSearch} country={props.country} />
    </div>
  );
};

export default Country;
