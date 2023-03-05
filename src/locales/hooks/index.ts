import { useTranslation } from 'react-i18next'
import { type IHome } from '../zhCN'
export const useHomeText = (key: IHome): string => {
  const { t } = useTranslation(['Home'])
  return t(key)
}
