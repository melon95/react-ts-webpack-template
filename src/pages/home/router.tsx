import AppRoutePath from '@src/routers/const'
import { type RouteObject } from 'react-router-dom'
import Component from './index'

const Router: RouteObject = {
  element: <Component />,
  path: AppRoutePath.HomeRoutePath
}
export default Router
