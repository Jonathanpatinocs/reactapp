const Header = ({course}) => {
    return(
      <h1>{course.name}</h1>
    )
  }
  const Part = ({part}) => {
    return (
      <p>{part.name} {part.exercises}</p>
    )
  }
  const Content = ({course}) => {
    console.log(course.parts);
    return (
      <div> 
        {course.parts.map(part => 
            <Part part={part} key={part.id}/>
            )}
      </div>
    
    )
  }
  const Footer = ({parts}) => {
    const num = parts[0].exercises + parts[1].exercises + parts[2].exercises
    return (
      <p>Number of exercises  {num}</p>
    )
  }


const Course = ({course})=> {


    return (
        <div>
            <Header course={course}/>
            <Content course ={course}/>
        </div>
    )
}
export default Course