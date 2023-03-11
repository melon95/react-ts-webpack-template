import { Layout } from 'antd'
import classNames from 'classnames'
import { Outlet } from 'react-router-dom'
import Aside from './aside'
import Container from './container'
import Footer from './footer'
import Header from './header'
import styles from './index.module.scss'

const Component: React.FC = () => {
  return (
    <Layout className={classNames(['grid', styles.root])}>
      <Aside />
      <div className={classNames(['grid', 'gap-8', styles.container])}>
        <Header />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </div>
    </Layout>
  )
}

export default Component
