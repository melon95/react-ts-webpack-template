import { theme, type GlobalToken } from 'antd'

export const useThemeToken = (): GlobalToken => {
  const { token } = theme.useToken()
  return token
}
