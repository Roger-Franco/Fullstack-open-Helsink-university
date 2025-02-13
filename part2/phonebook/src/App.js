import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'
import personService from './services/persons'
import './index.css'

const Notification = ({ message, isSuccess }) => {
  console.log(message, 'message')
  console.log(isSuccess, 'isSuccess')
  if (message === '') {
    return null
  }
  return (
    <div className={isSuccess ? 'success' : 'error'}>{message}</div>
  )
}

const App = () => {
  const [persons, setPersons] = useState()
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [successMessage, setPersons])

  const addPerson = (e) => {
    e.preventDefault()

    if (persons.some(person => person.name === newName)) {
      console.log('passou aqui 3666666')
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(person => person.name === newName)
        const newPerson = { ...person, number: newNumber }
        personService.update(newPerson.id, newPerson).then(returnedPerson => {
          setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
          // setSuccessMessage('Name changed to ' + newName + ' number changed to ' + newNumber)
          setIsSuccess(true)
          setSuccessMessage(`${newName}'s number has been changed`)
          setTimeout(() => {
            setSuccessMessage('')
          }, 5000)
          setNewName('')
          setNewNumber('')
          return
        })
          .catch(error => {
            console.log('passou aqui 522222')
            setIsSuccess(false)
            setSuccessMessage(
              `Information of '${newName}' has already removed from server`
            )
            setTimeout(() => {
              setSuccessMessage('')
            }, 5000)
            setPersons(persons.filter(p => p.id !== newPerson.id))
            return
          })
        return
      }

    }
    console.log('passou aqui 63')

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    personService.create(newPerson).then(returnedPerson => {
      console.log('passou aqui 75555')
      setPersons(persons.concat(returnedPerson))
      // setPersons(persons.concat(newPerson))
      setIsSuccess(true)
      setSuccessMessage(`Added ${newName}`)
      setTimeout(() => {
        setSuccessMessage('')
      }, 5000)
      setNewName('')
      setNewNumber('')
    })
      .catch(error => {
        console.log('passou aqui 855555')
        setSuccessMessage(
          `Information of '${newName}' has already removed from server`
        )
        setTimeout(() => {
          setSuccessMessage('')
        }, 5000)
        setPersons(persons.filter(p => p.id !== newPerson.id))
      })

  }

  const filterPersons = (filterName) => {
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))
    setPersons(filteredPersons)
  }

  const deletePerson = (person) => {
    if (window.confirm(`Do you really want to delete ${person.name}?`)) {
      personService.removePerson(person.id)
      setPersons(persons.filter(p => p.id !== person.id))
    }
  }
  console.log(successMessage, 'successMessage')

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} isSuccess={isSuccess} />
      <div>
        <Filter filterPersons={filterPersons} />
      </div>
      <h3>Add a new</h3>
      <Form addPerson={addPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
      <h2>Numbers</h2>
      <ul>
        {persons && persons.map(person => <Persons key={person.id} person={person} deletePerson={deletePerson} />)}
      </ul>
    </div>
  )
}

export default App