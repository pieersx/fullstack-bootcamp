import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { Notification } from './components/Notification'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import { create, getAll, remove, update } from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [notification, setNotification] = useState({
    message: null,
    type: '',
  })

  useEffect(() => {
    getAll().then((persons) => {
      setPersons(persons)
    })
  }, [])

  const showNotification = (message, type) => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification({ message: null, type: '' })
    }, 5000)
  }

  const handleAppPerson = (event) => {
    event.preventDefault()

    if (!newName.trim() || !newNumber.trim()) {
      return alert('Both name and number are required')
    }

    if (persons.some((person) => person.number === newNumber)) {
      return alert(`${newNumber} is already added to phonebook`)
    }

    const existingPerson = persons.find((person) => person.name === newName)
    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const updateNumber = { ...existingPerson, number: newNumber }
        update(existingPerson.id, updateNumber)
          .then((updatePerson) => {
            setPersons(
              persons.map((person) =>
                person.id === existingPerson.id ? updatePerson : person
              )
            )
            showNotification(`Updated ${newName} number`, 'success')
            setNewName('')
            setNewNumber('')
          })
          .catch((error) => {
            console.log('Error update:', error.status)
            if (error.status === 404) {
              showNotification(
                `Information of ${newName} has already been removed from server`,
                'error'
              )
              setPersons(
                persons.filter((person) => person.id !== existingPerson.id)
              )
              setNewName('')
              setNewNumber('')
            }
          })
      }
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    }

    create(newPerson)
      .then((newPerson) => {
        setPersons([...persons, newPerson])
        showNotification(`Added ${newPerson.name}`, 'success')
        setNewName('')
        setNewNumber('')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDeletePerson = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id))
        })
        .catch((err) => {
          showNotification(
            `Person ${name} was already deleted from server`,
            'error'
          )
          setPersons(persons.filter((person) => person.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification.message} type={notification.type} />
      <Filter searchTerm={searchTerm} handleSearchChange={setSearchTerm} />

      <h3>add a new</h3>
      <PersonForm
        name={newName}
        number={newNumber}
        handleNameChange={setNewName}
        handleNumberChange={setNewNumber}
        addPerson={handleAppPerson}
      />

      <h3>Numbers</h3>
      <Persons
        persons={personsToShow}
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  )
}

export default App
