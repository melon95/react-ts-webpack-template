import { createRoot } from 'react-dom/client'
import './locales'
import Router from './routers'
import './virtual:windi.css'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(<Router />)
