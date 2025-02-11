export const PersonForm = ({
  name,
  number,
  handleNameChange,
  handleNumberChange,
  addPerson,
}) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name:{' '}
          <input
            type='text'
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
          />
        </div>
        <div>
          number:{' '}
          <input
            type='text'
            value={number}
            onChange={(e) => handleNumberChange(e.target.value)}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  )
}
