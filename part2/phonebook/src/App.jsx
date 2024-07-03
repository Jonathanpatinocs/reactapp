import { useState, useEffect } from 'react'
import Name from './components/PhoneBookEntry'
import axios from 'axios'

const Filter = ({handleFilter, filter}) => {

  return(
    <input onChange={handleFilter} value={filter}/>
  )
  }

const PhoneBookView = ({phoneBook, filter}) => {
  return (
    phoneBook.filter(entry => entry.name.toLowerCase().includes(filter)).map(phoneEntry => 
      <Name name={phoneEntry.name} key={phoneEntry.id} number = {phoneEntry.number}/>
    )
  )
}

function App() {

  const [phoneBook, setPhoneBook] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(()=> {
    axios.get('http://localhost:3001/phoneBook')
    .then(response => setPhoneBook(response.data))
  },[])
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const addPhoneName = (event)=> {
    event.preventDefault()
    setNewName('')
  }
  const addPhoneNumber = (event) => {
    event.preventDefault()
    setNewPhoneNumber('')
  }
  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    setNewPhoneNumber(event.target.value)
  }
  const add = (event) => {
    addPhoneName(event)
    addPhoneNumber(event)
    if (phoneBook.map(entry => entry.name.toLowerCase()).includes(newName.toLowerCase())) {
      alert(`${newName} is already added to the phonebook`)
    } else {
    setPhoneBook(phoneBook.concat({id: phoneBook.length + 1, name: newName, number: newPhoneNumber}))
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} filter={filter}/>
      <h2>Add A New</h2>
      <form onSubmit={add}>
        <div>
          name: <input placeholder='name' value={newName} onChange={handleNewName} required/>
        </div>
        <div>
          number: <input type='tel' placeholder='123-456-7890' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' onChange={handleNewNumber} value={newPhoneNumber} required/>
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <PhoneBookView phoneBook={phoneBook} filter={filter}/>
      </ul>
      
    </div>
  )
}

export default App
