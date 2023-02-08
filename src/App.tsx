import { type ReactElement } from 'react'
import styles from './App.module.scss'
function App(): ReactElement {
  return (
    <div className={styles.app}>
      <h1>It is a custom react project</h1>
      <p>Welcome to use this template</p>
    </div>
  )
}

export default App
