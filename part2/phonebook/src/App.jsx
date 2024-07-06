/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import Name from './components/PhoneBookEntry'

import phonebookEntry from './services/phonebookEntry'

const Filter = ({handleFilter, filter}) => {

  return(
    <input onChange={handleFilter} value={filter}/>
  )
  }

const PhoneBookView = ({phoneBook, filter, deleteEntry}) => {
  return (
    phoneBook.filter(entry => entry.name.toLowerCase().includes(filter)).map(phoneEntry => 
      <Name name={phoneEntry.name} key={phoneEntry.id} number = {phoneEntry.number} deleteEntry={()=>deleteEntry(phoneEntry.id)}/>
    )
  )
}

function App() {
  
  const [phoneBook, setPhoneBook] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')


  useEffect(()=> {
    phonebookEntry.getAll()
    .then(response => setPhoneBook(response))
  },[])
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }
  useEffect(() => setPhoneBookId(phoneBook.length + 1))

  const [phonebookId, setPhoneBookId] = useState(0)
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
  const getId = () => {
    let id = 0
    if (phoneBook.length >= 1) {
      const phoneBookCopy = phoneBook.concat(phoneBook)
      const lastBook = phoneBookCopy.pop()
      id = +lastBook.id + 1
    } 
      
    return id
  }
  const add = (event) => {
    const id = getId()
    
    addPhoneName(event)
    addPhoneNumber(event)
    const newPhoneEntry = 
    {
      id: `${id}`,
      name: newName,
      number: newPhoneNumber
    }
    setPhoneBookId(phonebookId + 1)
    console.log(newPhoneEntry);
    if (phoneBook.map(entry => entry.name.toLowerCase()).includes(newName.toLowerCase())) {
      alert(`${newName} is already added to the phonebook`)
    } else {
    phonebookEntry
    .create(newPhoneEntry)
    .then(phoneEntry => {
      setPhoneBook(phoneBook.concat(phoneEntry))
    })
    }
  }
  const deleteEntry = (id) => {
    const entry = phoneBook.find(entry => entry.id === id)
    console.log(entry);
    phonebookEntry
    .deleteEntry(entry).then(response => {
      console.log(response);
      
        phonebookEntry.getAll()
        .then(response => setPhoneBook(response))

    }

    )
    .catch(error => console.log(error))

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
        <PhoneBookView phoneBook={phoneBook} filter={filter} deleteEntry={deleteEntry}/>
      </ul>
      
    </div>
  )
}

export default App
