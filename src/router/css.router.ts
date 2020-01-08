
import React from 'react'
import Item from './desc'
const cssRouter: Item[] = [
    {path: '/css/reset', component: React.lazy(() => import ('../pages/cssReset'))},
    {path: '/css/center', component: React.lazy(() => import ('../pages/cssCenter'))},
    {path: '/css/layout', component: React.lazy(() => import ('../pages/cssLayout'))}
]
export default cssRouter