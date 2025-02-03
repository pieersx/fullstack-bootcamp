import { Person } from './Person'

export const Persons = ({ persons }) => (
  <ul>
    {persons.map((person) => (
      <Person key={person.id} name={person.name} number={person.number} />
    ))}
  </ul>
)
