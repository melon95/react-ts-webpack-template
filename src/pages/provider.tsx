import { useLocaleStore } from '@locales'
import { useThemeStore } from '@src/themes/hooks'
import { ConfigProvider as AntdConfigProvider } from 'antd'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import { Outlet } from 'react-router-dom'

const antdLocale = {
  zh: zhCN,
  en: enUS
}

const Component: React.FC = () => {
  const lng = useLocaleStore((state) => state.lng)
  const algorithm = useThemeStore((state) => state.algorithm)
  return (
    <AntdConfigProvider
      locale={antdLocale[lng]}
      theme={{
        algorithm
      }}>
      <Outlet />
    </AntdConfigProvider>
  )
}

export default Component
