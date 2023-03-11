import { useThemeToken } from '@src/themes/hooks'
import { Layout } from 'antd'
import { useMemo } from 'react'

const { Content } = Layout

interface IProps {
  children?: React.ReactElement
}

const Component: React.FC<IProps> = (props: IProps) => {
  const { children } = props
  const { colorText } = useThemeToken()
  const contentStyle = useMemo(() => {
    return {
      color: colorText
    }
  }, [colorText])
  return (
    <Content style={contentStyle} className="px-8">
      {children}
    </Content>
  )
}

export default Component
