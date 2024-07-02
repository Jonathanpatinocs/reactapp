import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const phoneBook = [
  {
    id:1,
    name: 'Jerry'
  },
  {
    id:2,
    name: 'Sarah'
  },
  {
    id: 3,
    name: 'Harry'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App phoneBook = {phoneBook} />)
