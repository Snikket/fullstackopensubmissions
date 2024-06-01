import { useState } from 'react'

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
        phoneNumber: newPhoneNumber
      }
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewPhoneNumber('');
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={filterTerm} onChange={handleSearchTermChange}></input></div>
      <h2>add a new</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          number: <input value={newPhoneNumber} onChange={handleNewPhoneNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {personsToShow.map((person) => <div key={person.id}> {person.name} {person.phoneNumber}</div>)}

      <div>debug: {JSON.stringify(personsToShow)}</div>
    </div>
  )
}

export default App