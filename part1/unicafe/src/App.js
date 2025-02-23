import { useState } from 'react';

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {

  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={(props.good + props.neutral + props.bad)} />
          <StatisticLine text="average" value={((props.good - props.bad) / (props.good + props.neutral + props.bad)).toFixed(2)} />
          <StatisticLine text="positive" value={`${((props.good / (props.good + props.neutral + props.bad) || 0) * 100).toFixed(2)} %`} />
        </tbody>
      </table>
    </>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      {
        good === 0 && neutral === 0 && bad === 0
          ? <p>No feedback given</p>
          : <Statistics good={good} neutral={neutral} bad={bad} />
      }
    </div>
  )
}

export default App;
