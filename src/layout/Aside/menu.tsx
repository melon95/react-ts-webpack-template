import AppRoutePath from '@src/routers/const'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import type React from 'react'
import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(label: React.ReactNode, key: string): MenuItem {
  const result = {
    key,
    label: <Link to={key}>{label}</Link>
  }
  return result as MenuItem
}

const items: MenuProps['items'] = [
  getItem('Home', AppRoutePath.HomeRoutePath),
  getItem('List', AppRoutePath.ListRoutePath)
]

const matchMenu = (
  menuList: MenuProps['items'] = [],
  path: string
): MenuProps['items'] => {
  return menuList.filter((menu) => {
    const key = menu!.key as string
    // 首页路由为'',会匹配任何路径，因此特殊处理
    if (key === AppRoutePath.HomeRoutePath) {
      return path === AppRoutePath.HomeRoutePath
    }
    return path.startsWith(key)
  })
}

const Component: React.FC = () => {
  const { pathname } = useLocation()

  const keys = useMemo(() => {
    return matchMenu(items, pathname.slice(1))!.map(
      (menu) => menu!.key as string
    )
  }, [pathname])

  return <Menu selectedKeys={keys} mode="inline" items={items} />
}

export default Component
