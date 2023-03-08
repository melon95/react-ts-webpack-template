import Layout from '@src/layout'
import { type RouteObject } from 'react-router-dom'
import HomeRouters from './home/router'
import ListRouters from './list/router'
import LoginRouters from './login/router'
import Provider from './provider'

const InLayoutRouters = [HomeRouters, ListRouters]
const OutLayoutRouters = [LoginRouters]

const RootRouter: RouteObject[] = [
  {
    element: <Provider />,
    children: [
      {
        element: <Layout />,
        children: InLayoutRouters
      },
      ...OutLayoutRouters
    ]
  }
]

export default RootRouter
