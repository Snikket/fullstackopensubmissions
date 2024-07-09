import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [filterTerm, setFilterTerm] = useState('');

  useEffect(() => {
    console.log('in effect')
    personService.getAll()
    .then(initialPersons => {setPersons(initialPersons)})
  }, [])
  
  const personsToShow = filterTerm==='' ? persons : persons.filter (person => person.name.toLowerCase().includes(filterTerm.toLowerCase()));

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNewPhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value);
  }

  const handleSearchTermChange = (event) => {
    setFilterTerm(event.target.value);
  }

  const addNewPerson = (event) => {
    event.preventDefault();
    if (persons.some ( person => person.name===newName)){
      alert(`${newName} is already added to phonebook`);
    } else {
      console.log(event.target.value);
      const newPerson = {
        name: newName,
        phoneNumber: newPhoneNumber,
      }
      personService.create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('');
        setNewPhoneNumber('');
      })      
    }
  }

  const deletePerson = (person) => {
    console.log(`here's the id`,person.id)
    if(confirm(`Delete ${person.name} ?`)){
    const personIdToDelete = person.id
    personService.deletePerson(personIdToDelete)
    .then(() => setPersons(persons.filter(person=> person.id !== personIdToDelete)))
    .catch(error => {
      alert(`The person with id ${id} does not exist in the DB`)
    })}
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterTerm={filterTerm} onChange={handleSearchTermChange}/>
      <h2>add a new</h2>
      <PersonForm onSubmit={addNewPerson} onNameChange={handleNewNameChange} onNumberChange={handleNewPhoneNumberChange} newName={newName} newPhoneNumber={newPhoneNumber}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} deletePerson={deletePerson}/>
    </div>
  )
}

export default App