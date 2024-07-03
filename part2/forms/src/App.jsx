import { useState, useEffect } from 'react'

import Note from './components/Note'
import noteService from './services/notes'



const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState(
    ''
  ) 
  const [showAll, setShowAll] = useState(true)

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
      console.log(error);
    })
    
  }
  console.log(notes);
  return (
    <div>
      <h1>Notes</h1>
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