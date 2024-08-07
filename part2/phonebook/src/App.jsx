import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [filterTerm, setFilterTerm] = useState('');
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationType, setNotificationType] = useState(null);

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
    console.log(event.target.value);
    const newPerson = {
      name: newName,
      phoneNumber: newPhoneNumber,
    }
    const matchingPerson = persons.find(person => person.name === newName)
    if(matchingPerson) {
      const id = matchingPerson.id
      if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        personService.update(id, newPerson)
        .then(returnedPerson => {
          setNotificationMessage(`${returnedPerson.name}'s phone number has been updated to ${returnedPerson.phoneNumber}`)
          setNotificationType('success')
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
          setPersons(persons.filter(person => person.name !== newPerson.name).concat(returnedPerson))
          setNewName('');
          setNewPhoneNumber('');
        }) 
      };
    }
    if (persons.some ( person => person.name===newName)){
      
    } else {
      personService.create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNotificationMessage(`Added ${returnedPerson.name}`)
        setNotificationType('success')
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
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
      setNotificationMessage(`The person with id ${person.id} does not exist in the DB`)
      setNotificationType('error')
      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)
    })}
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification type={notificationType} message={notificationMessage}/>
      <Filter filterTerm={filterTerm} onChange={handleSearchTermChange}/>
      <h2>add a new</h2>
      <PersonForm onSubmit={addNewPerson} onNameChange={handleNewNameChange} onNumberChange={handleNewPhoneNumberChange} newName={newName} newPhoneNumber={newPhoneNumber}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} deletePerson={deletePerson}/>
    </div>
  )
}

export default App