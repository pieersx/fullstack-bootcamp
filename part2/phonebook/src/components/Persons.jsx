import { Person } from './Person'

export const Persons = ({ persons, handleDeletePerson }) => (
  <ul>
    {persons.map((person) => (
      <Person
        key={person.id}
        person={person}
        handleDeletePerson={handleDeletePerson}
      />
    ))}
  </ul>
)
