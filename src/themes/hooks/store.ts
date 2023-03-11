import { getStorage, setStorage } from '@utils/storage'
import { theme } from 'antd'
import { create } from 'zustand'

const { defaultAlgorithm, darkAlgorithm, defaultSeed } = theme

console.log(defaultAlgorithm(defaultSeed))

const themeAlgorithm = {
  defaultAlgorithm,
  darkAlgorithm
}

const StorageKey = 'themeAlgorithm'

type IThemeAlgorithmKey = keyof typeof themeAlgorithm
type IThemeAlgorithm = typeof defaultAlgorithm | typeof darkAlgorithm

const getThemeAlgorithm = (): IThemeAlgorithm =>
  themeAlgorithm[
    (getStorage(StorageKey) as IThemeAlgorithmKey) ?? 'defaultAlgorithm'
  ]

const setThemeAlgorithm = (val: IThemeAlgorithmKey): void => {
  setStorage(StorageKey, val)
}

interface IThemeStore {
  algorithm: IThemeAlgorithm
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

    const nextThemeAlgorithm: IThemeAlgorithm =
      algorithm === defaultAlgorithm ? darkAlgorithm : defaultAlgorithm
    set({
      algorithm: nextThemeAlgorithm
    })

    const nextThemeAlgorithmKey: IThemeAlgorithmKey =
      algorithm === defaultAlgorithm ? 'darkAlgorithm' : 'defaultAlgorithm'
    setThemeAlgorithm(nextThemeAlgorithmKey)
  }
}))
