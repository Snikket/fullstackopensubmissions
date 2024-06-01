import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: "929-608-9988"}
  ]) 
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNewPhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value);
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

      {persons.map((person) => <div key={person.name}> {person.name} {person.phoneNumber}</div>)}
    </div>
  )
}

export default App