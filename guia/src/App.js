import React, { useState } from 'react'
import { Filter } from './components/Filter'
import { Persons } from './components/Persons'
import { PersonForm } from './components/PersonForm'

function nameRepeat(persons, name){
  const found = persons.find(person => person.name === name)
  if (found) {
    return true
  }
  return false
}

function search(value, data){
  const filter = value.toUpperCase()
  const newData = data.filter(item => {
    if (item.name.toUpperCase().indexOf(filter) > -1) {
      return item
    }
  })
  return newData
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('0')
  const [filter, setFilter] = useState("")
  const [newPersons, setNewPersons] = useState([])

  const handleChangeName = ({target}) => {
    setNewName(target.value)
  }
  const handleChangeNumber = ({target}) => {
    setNewNumber(target.value)
  }
  const handleChangeFilter = ({target}) => {
    setFilter(target.value)
    setNewPersons(search(target.value, persons))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(nameRepeat(persons, newName)){
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, {name: newName, number: newNumber}])
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleChangeFilter} />
      <h2>Add a new</h2>
      <PersonForm 
        handleSubmit={handleSubmit}
        newName={newName}
        handleChangeName={handleChangeName} 
        newNumber={newNumber}
        handleChangeNumber={handleChangeNumber}
      />
      <h2>Numbers</h2>
      {
        filter.length > 0
        ?
        <Persons persons={newPersons} />  
        :
        <Persons persons={persons} />
      }
    </div>
  )
}

export default App