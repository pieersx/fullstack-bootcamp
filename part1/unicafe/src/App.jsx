import { useState } from 'react'

const Display = ({ value, text }) => (
  <div>
    {text} {value}
  </div>
)

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

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

      <h1>statistics</h1>
      <Display value={good} text='good' />
      <Display value={neutral} text='neutral' />
      <Display value={bad} text='bad' />
    </div>
  )
}

export default App
