export const getStorage = (key: string): string | null => {
  return localStorage.getItem(key)
}

export const setStorage = (key: string, val: string): void => {
  localStorage.setItem(key, val)
}
