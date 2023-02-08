import { createRoot } from 'react-dom/client'
import App from './App'
import './virtual:windi.css'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(<App />)
