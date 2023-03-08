import 'antd/dist/reset.css'
import { createRoot } from 'react-dom/client'
import './index.scss'
import './locales'
import Router from './routers'
import './virtual:windi.css'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(<Router />)
