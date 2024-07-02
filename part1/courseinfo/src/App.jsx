import Course from "./components/Course"

const App = () => {
  const courses = [{
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id:1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id:2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id:3
      }
    ]},
    {
      id: 2,
      name:'Node.JS',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'MiddleWares',
          exercises: 7,
          id: 2
        }
      ]
    }

  ]
  
  
  return(
    <div>
      <Course course = {courses[0]}/>
      <Course course = {courses[1]}/>
    </div>
  )
}

export default App