import { useLocaleStore } from '@locales'
import { useThemeStore } from '@src/themes/hooks'
import { Button, Layout, Switch } from 'antd'
import classNames from 'classnames'
import { useCallback } from 'react'
import styles from './index.module.scss'

const { Header } = Layout

const Component: React.FC = () => {
  const { setLng, showLng } = useLocaleStore()
  const { setAlgorithm: setThemeAlgorithm, isLight } = useThemeStore(
    ({ setAlgorithm, isLight }) => ({ isLight, setAlgorithm })
  )

  const showLngText = showLng()

  const changeLng = useCallback(() => {
    setLng(showLngText)
  }, [showLngText, setLng])

  return (
    <Header
      className={classNames([
        styles['header-light'],
        'flex justify-end items-center'
      ])}>
      <Switch checked={isLight()} onClick={setThemeAlgorithm} />
      <Button className="ml-4" size="small" onClick={changeLng}>
        {showLngText}
      </Button>
    </Header>
  )
}

export default Component
