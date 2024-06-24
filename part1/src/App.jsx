const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age}</p>
    </div>
  )
}
const App = () => {
  const friends = [
    'peter',
    'Maya'
  ]
  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}

export default App
