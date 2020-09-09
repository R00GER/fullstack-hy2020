import React from "react";
import DeleteButton from "./DeleteButton";

const Persons = ({ persons, removePerson }) => {
  return (
    <div>
      {persons.map((person) => {
        return (
          <div key={person.name} style={{ display: "flex" }}>
            <p>
              {person.name} {person.number}
            </p>
            <DeleteButton
              person={person.id}
              onClick={() => removePerson(person.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Persons;
