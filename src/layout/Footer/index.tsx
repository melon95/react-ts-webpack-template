import { useThemeToken } from '@src/themes/hooks'
import { Layout } from 'antd'
import { useMemo } from 'react'

const { Footer } = Layout

const Component: React.FC = () => {
  const { colorBgContainerDisabled } = useThemeToken()

  const footerStyle = useMemo(() => {
    return {
      background: colorBgContainerDisabled
    }
  }, [colorBgContainerDisabled])

  return (
    <Footer style={footerStyle} className="text-center">
      It is create by react template
    </Footer>
  )
}

export default Component
