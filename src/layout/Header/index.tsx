import { useThemeToken } from '@src/themes/hooks'
import { Layout } from 'antd'
import classNames from 'classnames'
import { useMemo } from 'react'
import styles from './index.module.scss'
import Locale from './locale'
import Theme from './theme'

const { Header } = Layout

const Component: React.FC = () => {
  const { colorBgContainer } = useThemeToken()

  const headerStyle = useMemo(() => {
    return {
      background: colorBgContainer
    }
  }, [colorBgContainer])

  return (
    <Header
      className={classNames([
        styles['header-light'],
        'flex justify-end items-center'
      ])}
      style={headerStyle}>
      <Theme />
      <Locale />
    </Header>
  )
}

export default Component
