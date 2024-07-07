/* eslint-disable react/prop-types */


const Note = ({ note, toggleImportance }) => {
  
    return (
      <li className="note">{note.content} <button onClick={toggleImportance}>{note.important ? 'Important' : 'Not Important'}</button></li>
      
    )
  }
  
  export default Note