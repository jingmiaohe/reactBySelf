import React from 'react'
import Item from './desc'
const vueRouter: Item[] = [
    {path: 'vue2/observeArr', component: React.lazy(() => import ('../pages/vue2/observeArr'))}
]
export default vueRouter