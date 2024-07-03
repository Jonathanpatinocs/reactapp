import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const phoneBook = [
  {
    id:1,
    name: 'Jerry',
    number: '404-123-7643'
  },
  {
    id:2,
    name: 'Sarah',
    number: '555-555-5555'
  },
  {
    id: 3,
    name: 'Harry',
    number: '187-362-6534'
  },
  {
    id: 4,
    name: 'Garry',
    number: '187-362-6534'
  },
  {
    id: 5,
    name: 'John',
    number: '187-362-6534'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App phoneBook = {phoneBook} />)
