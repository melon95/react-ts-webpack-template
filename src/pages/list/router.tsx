import AppRoutePath from '@src/routers/const'
import { type RouteObject } from 'react-router-dom'
import Component from './index'

const Route: RouteObject = {
  element: <Component />,
  path: AppRoutePath.ListRoutePath
}

export default Route
