import { useState, useEffect } from 'react'

import Note from './components/Note'
import noteService from './services/notes'
import Notification from './components/Notification'


const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('') 
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(()=> {
    noteService.getAll()
    .then(initialNotes => {
      setNotes(initialNotes)
    })
  },[])
    

  const viewNotes = showAll
  ? notes
  : notes.filter(note => note.important)



  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1
    }
    noteService
    .create(noteObject)
    .then(note => {
      setNotes(notes.concat(note))
      setNewNote('')
    })
    
    
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const toggleImportance = (id) => {
    
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}

    noteService.update(id, changedNote)
    .then(note => {
      setNotes(notes.map(n => n.id !== id ? n : note))
    })
    .catch(error => {
      setErrorMessage(
        `Note ${note.content} was already removed from the server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
    
  }
  console.log(notes);
  return (
    <div>
      <h1>Notes</h1>
      <Notification message ={errorMessage}/>
      <div>
      <button onClick={()=> setShowAll(!showAll)}>
        show {showAll ? 'important': 'all'}
        </button>
      </div>
      <ul>
        {viewNotes.map(note => 
          <Note key={note.id} note={note} toggleImportance={()=>toggleImportance(note.id)}/>)}
      </ul>
      <form onSubmit={addNote}>
      <input
          placeholder='add a new note'
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
      
    </div>
  )
}

export default App