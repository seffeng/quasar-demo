import routesSite from './_site'
import routesError from './_error'
import routesTest from './_test'

const routes = [].concat(
  routesSite,
  routesTest,

  // 错误页面 routesError 需要放在最后
  routesError
)

export default routes
