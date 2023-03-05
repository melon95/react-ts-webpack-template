import { useHomeText } from '@locales'
import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
function Home(): ReactElement {
  const labels = {
    home: useHomeText('home')
  }
  return (
    <div className={styles.app}>
      <p>I am {labels.home}</p>
      <Link to="/list">To List</Link>
    </div>
  )
}

export default Home
