import React from 'react'
import Item from './desc'
const jsRouter: Item[] = [
    {path: '/jsCore/memoryManagement', component: React.lazy(() => import ('../pages/js/memoryManagement'))},
    {path: '/jsCore/unitTest', component: React.lazy(() => import ('../pages/js/unitTest'))},
    {path: '/jsCore/codeReliable', component: React.lazy(() => import ('../pages/js/codeReliable'))},
    {path: '/jsCore/composePipe', component: React.lazy(() => import ('../pages/js/composeAndPipe'))},
    {path: '/jsCore/highOrderFun', component: React.lazy(() => import ('../pages/js/highOrderFun'))},
    {path: '/jsCore/commonFuns', component: React.lazy(() => import ('../pages/js/commonFuns'))},
    {path: '/jsCore/throttle', component: React.lazy(() => import ('../pages/js/throttle'))}
]
export default jsRouter