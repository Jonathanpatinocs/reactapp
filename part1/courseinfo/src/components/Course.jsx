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
  const Footer = ({course}) => {
    const num = course.parts.reduce((s,p) => s + p.exercises ,0)
        
    return (
      <p>Number of exercises  {num}</p>
    )
  }


const Course = ({course})=> {


    return (
        <div>
            <Header course={course}/>
            <Content course ={course}/>
            <Footer course={course}/>
        </div>
    )
}
export default Course