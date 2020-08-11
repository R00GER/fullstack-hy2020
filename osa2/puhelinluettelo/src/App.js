import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personsService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState("New number");
  const [newName, setNewName] = useState("New name");
  const [search, setSearch] = useState();
  const [showAll, setShowAll] = useState(true);
  const [notification, setNotification] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(persons.concat(initialPersons));
    });
  }, []);

  // case sensitive
  const handleNameSearch = (event) => {
    setShowAll(false);
    setSearch(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    const confirmText = `${newName} already added to phonebook, replace the old number with a new one?`;

    if (persons.some((obj) => obj.name === newName)) {
      const person = persons.find((p) => p.name === newName);
      const personID = person.id;
      const changedPerson = { ...person, number: newNumber };

      if (window.confirm(confirmText)) {
        personsService
          .update(personID, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((p) => (p.id !== personID ? p : returnedPerson))
            );
            setNotification(`Updated ${newName}`);
            setSuccess(true);
            setTimeout(() => {
              setNotification(null);
              setSuccess(null);
            }, 3000);
          })

          .catch((error) => {
            setNotification(
              `Information of ${person.name} has already been removed from the server`
            );
            setSuccess(false);
            setPersons(persons.filter((p) => p.id !== personID));
            setTimeout(() => {
              setNotification(null);
              setSuccess(null);
            }, 3000);
          });
        resetInputs();
      } else {
        return;
      }
    } else {
      personsService
        .create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNotification(`Added ${personObject.name}`);
          setSuccess(true);
          setTimeout(() => {
            setNotification(null);
            setSuccess(null);
          }, 3000);
          resetInputs();
        })
        .catch((error) => {
          setNotification("Something went wrong");
          setSuccess(false);
          setTimeout(() => {
            setNotification(null);
            setSuccess(null);
          }, 3000);
        });
    }
  };

  const removePerson = (id) => {
    personsService
      .deletePerson(id)
      .then((response) => {
        setPersons(persons.filter((person) => person.id !== id));
        setNotification(
          `Removed ${persons.map((person) => 
            person.id === id ? person.name : null
          )}`
        );
        setSuccess(true);
        setTimeout(() => {
          setNotification(null);
          setSuccess(null);
        }, 3000);
      })
      .catch((error) => {
        setNotification("Something went wrong");
        setSuccess(false);
        setTimeout(() => {
          setNotification(null);
          setSuccess(null);
        }, 3000);
      });
  };

  const handleInputs = (event) => {
    const id = event.target.id;

    if (id === "nameInput") {
      setNewName("");
    } else setNewNumber("");
  };

  const resetInputs = () => {
    setNewName("New name");
    setNewNumber("New Number");
  };

  const namesToShow = showAll
    ? persons
    : persons.filter((person) => person.name.includes(search));

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} success={success} />
      <Search search={handleNameSearch} />
      <h3>Add a new</h3>
      <PersonForm
        nameChange={handleNameChange}
        numberChange={handleNumberChange}
        nameValue={newName}
        numberValue={newNumber}
        click={addName}
        clear={handleInputs}
      />
      <h2>Numbers</h2>
      <Persons persons={namesToShow} removePerson={removePerson} />
    </div>
  );
};

export default App;
