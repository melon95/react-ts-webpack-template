import { Layout } from 'antd'
import Menu from './menu'

const { Sider } = Layout

const props = {
  style: { minWidth: 0, flex: 'auto' }
} as any

const Component: React.FC = () => {
  return (
    <Sider>
      <Menu {...props} />
    </Sider>
  )
}

export default Component
