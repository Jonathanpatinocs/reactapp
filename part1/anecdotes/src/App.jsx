import { useState } from 'react'


const RandomAncedote = ({anecdotes, selected}) => {
  return (
    <p>{anecdotes[selected]}</p>
  )
}
const Votes = ({votes}) => {
  return(
    <p>Votes: {votes}</p>
  )
}
const HighestVotedAncedote = ({points, anecdote})=> {

  return (

    <div>
    <h1>Highest voted Ancedote</h1>
    <p>{anecdote}</p>
    <p>has {points}</p>
    </div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])
  const [mostVotes, setMostVotes] = useState(0)
  const [highestVotedAncedote, setHighest] = useState(anecdotes[0])
  const getRandom = ()=> {
    const random = Math.floor(Math.random() * (anecdotes.length - 1))
    setSelected(random)
  }
  
  
  const vote = () => {
    const copy = {...points}
    const updatePoints = copy[selected] + 1
    copy[selected] = updatePoints
    setPoints(copy)
    if (updatePoints > mostVotes) {
      setMostVotes(updatePoints)
      setHighest(anecdotes[selected])
    }
    console.log(selected)
    console.log(points)
  }

  
  return (
    <div>
      <RandomAncedote  anecdotes={anecdotes} selected={selected}/>
      <Votes votes={points[selected]}/>
      <button onClick={getRandom}>next anecdote</button>
      <button onClick={vote}>Vote</button>
      <HighestVotedAncedote points={mostVotes} anecdote={highestVotedAncedote}/>
      
    </div>
  )
}



export default App
