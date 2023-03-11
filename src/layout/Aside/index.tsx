import { Layout } from 'antd'
import classNames from 'classnames'
import Icon from './icon'
import styles from './index.module.scss'
import Menu from './menu'

const { Sider } = Layout

const props = {
  style: { minWidth: 0, flex: 'auto' }
} as any

const Component: React.FC = () => {
  return (
    <Sider className={classNames([styles.aside])} theme="light">
      <Icon />
      <Menu {...props} />
    </Sider>
  )
}

export default Component
