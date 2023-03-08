import classNames from 'classnames'
import { Outlet } from 'react-router-dom'
import Aside from './Aside'
import Container from './Container'
import Footer from './Footer'
import Header from './Header'
import styles from './index.module.scss'

const Component: React.FC = () => {
  return (
    <div className={classNames(['grid', styles.root])}>
      <Aside />
      <div className={classNames(['grid', 'gap-8', styles.container])}>
        <Header />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </div>
    </div>
  )
}

export default Component
