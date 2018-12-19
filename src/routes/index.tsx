import * as React from 'react'
import Loadable from 'react-loadable'

const AsyncIndex = Loadable({
    loader: () => import('../containers/Index/index'),
    loading() {
        return <div>Loading...</div>
    }
})

const AsyncMy = Loadable({
    loader: () => import('../containers/My/index'),
    loading() {
        return <div>Loading...</div>
    }
})

export default [
    {
        name: 'index',
        path: '/index',
        component: AsyncIndex
    },
    {
        name: 'my',
        path: '/my',
        component: AsyncMy
    }
]
