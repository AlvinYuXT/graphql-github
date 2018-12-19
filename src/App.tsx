import * as React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Query } from 'react-apollo'
import { Drawer, List, NavBar, Icon } from 'antd-mobile'

import { getLoginUser as QUERY } from './querys/index'

import routes from './routes/index'

interface Data {
    currency: string | number
    rate: string | number
}

const App = () => {
    return (
        <Router>
            <Switch>
                {routes.map(route => {
                    return (
                        <Route key={route.name} path={route.path} component={route.component} />
                    )
                })}
            </Switch>
        </Router>
    )
}

export default App
