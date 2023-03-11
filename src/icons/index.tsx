import { Icon } from '@iconify/react'

interface IIconProp {
  color?: string
  width?: number
  height?: number
}

export const IconDarkTheme: React.FC<IIconProp> = (props) => (
  <Icon {...props} icon="material-symbols:dark-mode" />
)
export const IconLightTheme: React.FC<IIconProp> = (props) => (
  <Icon {...props} icon="material-symbols:light-mode-outline" />
)
