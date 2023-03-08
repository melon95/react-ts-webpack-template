import { Link } from 'react-router-dom'

const Component: React.FC = () => {
  return (
    <div>
      <Link to="/list">To List</Link>
      <Link to="/login">To Login</Link>
    </div>
  )
}

export default Component
