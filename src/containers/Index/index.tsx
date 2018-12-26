import * as React from 'react'
import { Query } from 'react-apollo'

import { getViewerRepos as QUERY } from '../../querys/index'
import Navbar from '@/components/Navbar/index'
import Tabbar from '@/components/Tabbar/index'
import ListView from '@/components/ListView/index'

const Index: React.SFC<any> = () => {
    const renderNav = () => <Navbar title={'github'} />

    const renderBottomNav = () => <Tabbar />

    const renderView = (data: any) => {
        return <ListView dataSource={data.viewer.repositories.nodes} />
    }

    const content = (data: any) => {
        // Toast.hide()
        return (
            <React.Fragment>
                {renderNav()}
                {renderView(data)}
                {renderBottomNav()}
            </React.Fragment>
        )
    }

    return (
        <Query query={QUERY} variables={{ offset: 10 }}>
            {({ loading, error, data }) => {
                // if (loading) return <div>Loading...</div>
                if (error) return <p>Error :(</p>
                if (Object.keys(data).length > 0) return content(data)
                return null
            }}
        </Query>
    )
}
export default Index
