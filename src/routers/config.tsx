import { createBrowserRouter } from 'react-router-dom'
import PageRouters from '../pages'

const ROUTERS = createBrowserRouter(PageRouters, {
  basename: '/'
})

export default ROUTERS
