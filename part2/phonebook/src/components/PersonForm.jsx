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
          name: <input value={name} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  )
}
