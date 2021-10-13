import React, { useState, useEffect } from 'react'
import { Filter } from './filter'
import { PersonForm } from './personForm'
import { Persons } from './persons'
import { createPerson } from './services/createPerson';
import { deletePerson } from './services/deletePerson';
import { getAllPersons } from './services/getAllPersons';
import { updatePerson } from './services/updatePerson';

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    getAllPersons().then(data => setPersons(data))   
  }, []);

  const handleSearch = ({target}) => {
    setSearch(target.value);
  }

  const handleName = ({target}) => {
    setNewName(target.value);
  }

  const handleNumber = ({target}) => {
    setNewNumber(target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.some(value => { 
      return value.name === newName 
    })) {
      if(window.confirm(`Do you want to update this person?`)) {
        const updatedPerson = {
          name: newName,
          number: newNumber,
          id: persons.find(person => person.name === newName).id
        };
        updatePerson(updatedPerson)
          .then(setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson)))
      }
    } else {
      const personToAdd = {
        name: newName,
        number: newNumber
      };
  
      const ids = persons.map(person => person.id)
      const maxId = persons.length === 0 ? 0 : Math.max(...ids)
      createPerson(personToAdd)
        .then(setPersons(prev => [...prev, {
          name: newName,
          number: newNumber,
          id: maxId + 1
        }]))
        .catch((e) => {
          console.error(e)
        });
    
    setNewName("");
    setNewNumber("");
  
    }
  }

  const handleDelete = ({target}) => {
    let result = window.confirm('Are you sure you want to delete this person?')
    if (result === true) {
      deletePerson(target.value)
        .then(setPersons(persons.filter(person => person.id !== Number(target.value))))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch}/>
      <h3>Add a new</h3>
      <PersonForm handleSubmit={handleSubmit} handleName={handleName} handleNumber={handleNumber} name={newName} number={newNumber}/>
      <h3>Numbers</h3>
      <Persons persons={persons} search={search} handleDelete={handleDelete}/>
    </div>
  )
}

export default App