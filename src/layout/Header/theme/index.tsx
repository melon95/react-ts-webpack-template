import { IconDarkTheme, IconLightTheme } from '@src/icons'
import { useThemeStore } from '@src/themes/hooks'

const width = 28
const height = 28

const Component: React.FC = () => {
  const { setAlgorithm: setThemeAlgorithm, isLight } = useThemeStore(
    ({ setAlgorithm, isLight }) => ({ isLight, setAlgorithm })
  )
  return (
    <span
      className="cursor-pointer flex items-center"
      onClick={setThemeAlgorithm}>
      {isLight() ? (
        <IconDarkTheme width={width} height={height} />
      ) : (
        <IconLightTheme width={width} height={height} />
      )}
    </span>
  )
}

export default Component
