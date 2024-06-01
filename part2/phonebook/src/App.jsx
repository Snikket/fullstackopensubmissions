import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: "929-608-9988", id:1},
    { name: 'Ada Lovelace', phoneNumber: "123-342-9988", id:2},
    { name: 'Dave Hokins', phoneNumber: "929-234-9988", id:3},
    { name: 'Arto Heklas', phoneNumber: "665-608-4859", id:4},
  ]) 
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [filterTerm, setFilterTerm] = useState('');

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
        id: newName
      }
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewPhoneNumber('');
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterTerm={filterTerm} onChange={handleSearchTermChange}/>
      <h2>add a new</h2>
      <PersonForm onSubmit={addNewPerson} onNameChange={handleNewNameChange} onNumberChange={handleNewPhoneNumberChange} newName={newName} newPhoneNumber={newPhoneNumber}/>
      <h2>Numbers</h2>

      <Persons persons={personsToShow}/>

      <div>debug: {JSON.stringify(personsToShow)}</div>
    </div>
  )
}

export default App