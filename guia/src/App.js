import React, { useState } from 'react'

function nameRepeat(persons, name){
  const found = persons.find(person => person.name == name)
  if (found) {
    return true
  }
  return false
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('0')


  const handleChangeName = ({target}) => {
    setNewName(target.value)
  }
  const handleChangeNumber = ({target}) => {
    setNewNumber(target.value)
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
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
          number: <input value={newNumber} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        return(
          <div key={person.name}>
            <h4>{person.name} {person.number}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default App