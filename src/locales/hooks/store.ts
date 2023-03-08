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
  setLng: (val: ILng) => void
  showLng: () => ILng
}

export const useLocaleStore = create<ILocaleState>((set, get) => ({
  lng: getLng(),
  setLng: (lng) => {
    set({ lng })
    setLng(lng)
    void i18n.changeLanguage(lng)
  },
  showLng: (): ILng => {
    const lng = get().lng
    return lng === 'en' ? 'zh' : 'en'
  }
}))
