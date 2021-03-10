
import routesSite from './_site'
import routesError from './_error'
import routesTest from './_test'

const tmpRoutes = []

const routes = tmpRoutes.concat(
  routesSite,
  // 测试导航路由，删除
  routesTest,

  // 包含 404 等错误路由，需放在最后
  routesError
)

export default routes
