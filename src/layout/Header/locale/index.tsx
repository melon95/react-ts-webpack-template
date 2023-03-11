import { useLocaleStore } from '@locales'
import { Button } from 'antd'
import { useCallback } from 'react'

const Component: React.FC = () => {
  const { setLng, showLng } = useLocaleStore()

  const showLngText = showLng()

  const changeLng = useCallback(() => {
    setLng(showLngText)
  }, [showLngText, setLng])

  return (
    <Button className="ml-4" size="small" onClick={changeLng}>
      {showLngText}
    </Button>
  )
}

export default Component
