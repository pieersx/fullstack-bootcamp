export const Notification = ({ message, type }) => {
  if (!message) {
    return null
  }

  return <div className={`notification ${type}`}>{message}</div>
}
