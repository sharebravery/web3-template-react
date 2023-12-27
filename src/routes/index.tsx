import type { RouteObject } from 'react-router-dom'
import React from 'react'

interface IRouterMeta {
  title?: string
  icon?: string
}

export type IRouter = (RouteObject & { meta?: IRouterMeta })

const routes: IRouter[] = [
  {
    path: '/',
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <div>555</div>
      </React.Suspense>
    ),
  },

]

export default routes
