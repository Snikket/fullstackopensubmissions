const Hello = (props) => {
  const person = {name:props.name, age:props.age};
  const namesList = [props.name, props.age]
  return (
    <div>
      <p>Hello {person.name} {person.age}</p>
      <p>{namesList}</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name="George" age='4'/>
      <Hello name="Melissa" age='21'/>
    </div>
  )
}

export default App;