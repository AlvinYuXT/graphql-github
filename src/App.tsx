import * as React from 'react'
import { Query } from 'react-apollo'
import { Drawer, List, NavBar, Icon } from 'antd-mobile'

import { getLoginUser as QUERY } from './querys/index'

interface Data {
    currency: string | number
    rate: string | number
}

const App = () => {
    const getNav = () => {
        return (
            <NavBar
                mode="light"
                // icon={<Icon type="left" />}
                // onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <Icon
                        key="search"
                        type="search"
                        style={{ marginRight: '16px' }}
                    />,
                    <Icon key="ellipsis" type="ellipsis" />
                ]}
            >
                Github
            </NavBar>
        )
    }

    const content = () => {
        return <React.Fragment>{getNav()}</React.Fragment>
    }

    return (
        <Query
            query={QUERY}
            // variables={{currency: "USD"}}
        >
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error :(</p>
                return content()
            }}
        </Query>
    )
}

export default App
