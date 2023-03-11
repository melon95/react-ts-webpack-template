import { getStorage, setStorage } from '@utils/storage'
import i18n from 'i18next'
import { create } from 'zustand'
import { type ILng } from '../interface'

export const getLng = (): ILng => (getStorage('lng') as ILng) ?? 'en'
export const setLng = (val: ILng): void => {
  setStorage('lng', val)
}

interface ILocaleState {
  lng: ILng
  setLng: (val: Uppercase<ILng>) => void
  showLng: () => Uppercase<ILng>
}

export const useLocaleStore = create<ILocaleState>((set, get) => ({
  lng: getLng(),
  setLng: (lng) => {
    const val = lng.toLowerCase() as ILng
    set({ lng: val })
    setLng(val)
    void i18n.changeLanguage(lng)
  },
  showLng: (): Uppercase<ILng> => {
    const lng = get().lng
    return lng === 'en' ? 'ZH' : 'EN'
  }
}))
