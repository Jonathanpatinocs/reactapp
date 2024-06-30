import { useState } from 'react'

const Button = ({setFeedback, text}) => {
  return (
    <button onClick={setFeedback}>{text}</button>
  )
}
const StatisticsLine = ({text, value}) => {
  return <tr><td>{text}: {value}</td></tr>
}
const Statistics = ({feedback}) => {
  const calcTotal = feedback.good + feedback.bad + feedback.neutral
  const goodScore = feedback.good * 1
  const neutralScore = feedback.neutral * 0
  const badScore = feedback.bad * -1
  const calcAverage = (goodScore + badScore + neutralScore) / calcTotal
  const calcPositive = feedback.good / calcTotal
  if( calcTotal === 0) {
    return <p>No feedback given</p>
  }
  return(
    <div>
      <table>
        <tbody>
        <StatisticsLine text = 'good' value={feedback.good}/>
        <StatisticsLine text = 'Bad' value={feedback.bad}/>
        <StatisticsLine text = 'Neutral' value={feedback.neutral}/>
        <StatisticsLine text = 'All' value={calcTotal}/>
        <StatisticsLine text = 'Average' value={calcAverage}/>
        <StatisticsLine text = 'Positive' value={calcPositive}/>
        </tbody>
      </table> 
    </div>
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

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button setFeedback={goodFeeback} text='Good'/>
      <Button setFeedback={neutralFeedback} text='Neutral'/>
      <Button setFeedback={badFeedback} text='Bad'/>
      <h1>Statistics</h1>
      <Statistics feedback={feedback}/>

    </div>
  )
}




export default App
