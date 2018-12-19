import * as React from 'react'
import { Query } from 'react-apollo'
// import { NavBar, Icon } from 'antd-mobile'

import { getLoginUser as QUERY } from '../../querys/index'
import Navbar from '@/components/Navbar/index'


const Index: React.SFC<any> = () => {
    const getNav = () => {
        return (
            <Navbar
                title={'github'}
            />
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
export default Index
