

const Header = (props) => {
  console.log(props, 'props')
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props, 'props Content')
  return (
    <>
      <Part part={props.parts[0]?.name} exercises={props.parts[0]?.exercises} />
      <Part part={props.parts[1]?.name} exercises={props.parts[1]?.exercises} />
      <Part part={props.parts[2]?.name} exercises={props.parts[2]?.exercises} />
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0]?.exercises + props.parts[1]?.exercises + props.parts[2]?.exercises}</p>
  )
}
const App = () => {

  const course = 'Desenvolvimento de aplicação Half Stack'

  const parts = [
    {
      name: 'Fundamentos da biblioteca React',
      exercises: 10
    },
    {
      name: 'Usando props para passar dados',
      exercises: 7
    },
    {
      name: 'Estado de um componente',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App;
