import { getStorage, setStorage } from '@utils/storage'
import { theme } from 'antd'
import { create } from 'zustand'

const { defaultAlgorithm, darkAlgorithm } = theme

const themeAlgorithm = {
  defaultAlgorithm,
  darkAlgorithm
}

const StorageKey = 'themeAlgorithm'

type IAlgorithmKey = keyof typeof themeAlgorithm
type IAlgorithm = typeof defaultAlgorithm | typeof darkAlgorithm

const getThemeAlgorithm = (): IAlgorithm =>
  themeAlgorithm[
    (getStorage(StorageKey) as IAlgorithmKey) ?? 'defaultAlgorithm'
  ]

const setThemeAlgorithm = (val: IAlgorithmKey): void => {
  setStorage(StorageKey, val)
}

interface IThemeStore {
  algorithm: IAlgorithm
  isLight: () => boolean
  setAlgorithm: () => void
}

export const useThemeStore = create<IThemeStore>((set, get) => ({
  algorithm: getThemeAlgorithm(),
  isLight() {
    return get().algorithm === themeAlgorithm.defaultAlgorithm
  },
  setAlgorithm: () => {
    const { algorithm } = get()

    const nextThemeAlgorithm: IAlgorithm =
      algorithm === defaultAlgorithm ? darkAlgorithm : defaultAlgorithm
    set({
      algorithm: nextThemeAlgorithm
    })

    const nextThemeAlgorithmKey: IAlgorithmKey =
      algorithm === defaultAlgorithm ? 'darkAlgorithm' : 'defaultAlgorithm'
    setThemeAlgorithm(nextThemeAlgorithmKey)
  }
}))
