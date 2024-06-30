import { useState } from 'react'

const Button = ({setFeedback, text}) => {

  return (
    <button onClick={setFeedback}>{text}</button>
  )
}
const App = () => {

  const [feedback, setFeedback] = useState({
    good: 0, neutral: 0, bad: 0
  })
  const goodFeeback = ()=> {
    
    setFeedback({
      ...feedback,
      good: feedback.good + 1
      
  })
  
  }
  const badFeedback = () => {
    setFeedback({
      ...feedback,
      bad: feedback.bad + 1
    })
    console.log(feedback)
  }
  const neutralFeedback = () => {
    setFeedback({
      ...feedback,
      neutral: feedback.neutral + 1
    })
    console.log(feedback)
  }
  const calcTotal = feedback.good + feedback.bad + feedback.neutral
    
    const goodScore = feedback.good * 1
    const neutralScore = feedback.neutral * 0
    const badScore = feedback.bad * -1
    const calcAverage = (goodScore + badScore + neutralScore) / calcTotal

  const calcPositive = feedback.good / calcTotal

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button setFeedback={goodFeeback} text='Good'/>
      <Button setFeedback={neutralFeedback} text='Neutral'/>
      <Button setFeedback={badFeedback} text='Bad'/>
      <h1>Statistics</h1>
      <p>Good: {feedback.good}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>All: {calcTotal}</p>
      <p>Average: {calcAverage}</p>
      <p>Positive: {calcPositive}</p>

    </div>
  )
}




export default App
