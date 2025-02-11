export const Filter = ({ searchTerm, handleSearchChange }) => {
  return (
    <div>
      filter shown with:{' '}
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </div>
  )
}
