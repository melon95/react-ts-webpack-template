import { Layout } from 'antd'

const { Content } = Layout

interface IProps {
  children?: React.ReactElement
}

const Component: React.FC<IProps> = (props: IProps) => {
  const { children } = props
  return <Content className="px-8">{children}</Content>
}

export default Component
