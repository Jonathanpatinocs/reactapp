import { useState } from 'react'
import Name from './components/PhoneBookEntry'

function App(props) {

  const [phoneBook, setPhoneBook] = useState(props.phoneBook)
  const [newName, setNewName] = useState('')

  const addPhoneName = (event)=> {

    event.preventDefault()
    if (phoneBook.map(entry => entry.name.toLowerCase()).includes(newName.toLowerCase())) {
      alert(`${newName} is already added to the phonebook`)
    } else {
    setPhoneBook(phoneBook.concat({id: phoneBook.length + 1, name: newName}))
    }
    setNewName('')
  }
  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input placeholder='name' value={newName} onChange={handleNewName}/>
        </div>
        <div>
          <button type='submit' onClick={addPhoneName}>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {phoneBook.map(phoneEntry => 
          <Name name={phoneEntry.name} key={phoneEntry.id}/>
        )}
      </ul>
      
    </div>
  )
}

export default App
