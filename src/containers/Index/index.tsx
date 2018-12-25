import * as React from 'react'
import { Query } from 'react-apollo'
import { Toast } from 'antd-mobile'

import { test as QUERY } from '../../querys/index'
import Navbar from '@/components/Navbar/index'
import Tabbar from '@/components/Tabbar/index'

const Index: React.SFC<any> = () => {
    const getNav = () => {
        return (
            <Navbar
                title={'github'}
            />
        )
    }

    const getBottomNav = () => (<Tabbar />)

    const content = () => {
        // Toast.hide()
        return <React.Fragment>
        {getNav()}
        {getBottomNav()}
        </React.Fragment>
    }

    return (
        <Query
            query={QUERY}
        >
            {({ loading, error, data }) => {
                // if (loading) return <div>Loading...</div>
                if (error) return <p>Error :(</p>
                return content()
            }}
        </Query>
    )
}
export default Index
