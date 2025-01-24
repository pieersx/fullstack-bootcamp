import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total > 0 ? (good - bad) / total : 0
  const percentage = good > 0 ? (good / total) * 100 : 0

  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>statistics</h2>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='total' value={total} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='percentage' value={`${percentage} %`} />
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (comment) => {
    comment === 'good'
      ? setGood(good + 1)
      : comment === 'neutral'
      ? setNeutral(neutral + 1)
      : comment === 'bad'
      ? setBad(bad + 1)
      : null
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => handleClick('good')} text='good' />
      <Button onClick={() => handleClick('neutral')} text='neutral' />
      <Button onClick={() => handleClick('bad')} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
