import React from 'react'
import Item from './desc'
const tsRouter: Item[] = [
    {path: '/ts/base', component: React.lazy(() => import ('../pages/ts/base'))},
    {path: '/ts/hard', component: React.lazy(() => import ('../pages/ts/hard'))},
    {path: '/ts/arr', component: React.lazy(() => import ('../pages/ts/arr'))},
    {path: '/ts/clas', component: React.lazy(() => import ('../pages/ts/clas'))},
    {path: '/ts/fun', component: React.lazy(() => import ('../pages/ts/fun'))},
    {path: '/ts/enum', component: React.lazy(() => import ('../pages/ts/enum'))},
    {path: '/ts/fan', component: React.lazy(() => import ('../pages/ts/fan'))},
    {path: '/ts/assert', component: React.lazy(() => import ('../pages/ts/assert'))},
]
export default tsRouter