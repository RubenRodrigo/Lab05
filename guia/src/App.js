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
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleChange = ({target}) => {
    setNewName(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(nameRepeat(persons, newName)){
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, {name: newName}])
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        return(
          <h4 key={person.name}>{person.name}</h4>
        )
      })}
    </div>
  )
}

export default App