export const Filter = ({ searchTerm, handleSearchChange }) => {
  return (
    <div>
      filter shown with:{' '}
      <input value={searchTerm} onChange={handleSearchChange} />
    </div>
  )
}
