const Total = ({ parts }) => {
  // const total =  parts.reduce((acc, item) => acc + item.exercises, 0)
  const total = parts.reduce((acc, item) => {
    console.log('what is happening', acc, item)
    return acc + item.exercises
  }, 0)
  return (
    <div>
      <b>Total of {total} exercises</b>
    </div>
  )
}

export default Total;