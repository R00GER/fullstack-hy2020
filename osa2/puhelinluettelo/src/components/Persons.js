import React from 'react'
import DeleteButton from './DeleteButton';

const Persons = ({persons, removePerson}) => {

return (
    <div>
        {persons.map((person) => {
          // console.log(person);
          
          return (
          <div key={person.number} style={{display: "flex"}}> 
            <p key={person.number}>
              {person.name} {person.number}
            </p>
          <DeleteButton person={person.id} onClick={() => removePerson(person.id)}/>
          </div>
          );
        })}
      </div>
)
}


export default Persons