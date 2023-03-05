import { RouterProvider } from 'react-router-dom'
import ROUTERS from './config'

const Router: React.FC = () => {
  return <RouterProvider router={ROUTERS} />
}

export default Router
