import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  preflight: false,
  extract: {
    include: ['**/*.{html,jsx,tsx}'],
    exclude: ['node_modules', '.git', 'dist']
  }
})
