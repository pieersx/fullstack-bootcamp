export const Person = ({ person, handleDeletePerson }) => {
  return (
    <li>
      {person.name} {person.number}{' '}
      <button onClick={() => handleDeletePerson(person.id, person.name)}>
        deleted
      </button>
    </li>
  )
}
