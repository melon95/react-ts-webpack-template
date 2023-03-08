import { useHomeText } from '@locales'
import { TemplateComponent } from '@src/components'
import styles from './index.module.scss'

const Component: React.FC = () => {
  const labels = {
    home: useHomeText('home')
  }
  return (
    <div className={styles.app}>
      <p>I am {labels.home}</p>
      <TemplateComponent />
    </div>
  )
}

export default Component
