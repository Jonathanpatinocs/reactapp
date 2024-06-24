
const Header = (props) => {
  return(
    <h1>{props.text}</h1>
  )
}
const Part = ({part, exercises}) => {
  return (
    <p>{part} {exercises}</p>
  )
}
const Content = ({parts}) => {
  console.log(parts)
  return (
    <div> 
      <Part part={parts[0].name} exercises={parts[0].exercises}/>
      <Part part={parts[1].name} exercises={parts[1].exercises}/>
      <Part part={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  
  )
}
const Footer = ({parts}) => {
  const num = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <p>Number of exercises  {num}</p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return(
    <div>
      <Header text={course.name}/>
      <Content parts = {course.parts}/>
      <Footer parts = {course.parts}/>
    </div>
  )
}

export default App