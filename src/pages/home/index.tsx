import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
function Home(): ReactElement {
  return (
    <div className={styles.app}>
      <p>I am Home</p>
      <Link to="/list">To List</Link>
    </div>
  )
}

export default Home
