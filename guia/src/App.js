import React, { useState } from 'react'

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
      <div>
        filter shown with: <input value={filter} onChange={handleChangeFilter} />
      </div>
      <form onSubmit={handleSubmit}>
      <h2>Add a new</h2>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
          number: <input value={newNumber} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        filter.length > 0
        ?
        newPersons.map(person => {
          return(
            <div key={person.name}>
              <h4>{person.name} {person.number}</h4>
            </div>
          )
        })
        :
        persons.map(person => {
          return(
            <div key={person.name}>
              <h4>{person.name} {person.number}</h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default App