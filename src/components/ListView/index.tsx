import * as React from 'react'
import { ListView, Icon, Card } from 'antd-mobile'
import './index.scss'

const ds = new ListView.DataSource({
    rowHasChanged: (r1: any, r2: any) => r1 !== r2
})

const Index: React.SFC<any> = props => {
    const dataSource: any = ds.cloneWithRows(props.dataSource)
    const renderFooter = () => (
        <div>{props.loading && <Icon type={'loading'} />}</div>
    )

    const onEndReached = props.onEndReached
    const renderExtra = (extra: string) => {
        return <span styleName="extra">{extra}</span>
    }
    const renderBody = (desc: string, extra: string) => {
        return (
            <React.Fragment>
                <div>{desc}</div>
                <p>{renderExtra(extra)}</p>
            </React.Fragment>
        )
    }
    const renderCardFooter = (row: any) => {
        console.log(row, 'row')
        return (
            <div>
                <span>{row.languages.nodes[0] && row.languages.nodes[0].name}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                    stars:
                    {row.stargazers.totalCount}
                </span>
            </div>
        )
    }
    const renderRow = (rowData: any, sectionID: any, rowID: any) => {
        return (
            <Card>
                <Card.Header title={rowData.name} />
                <Card.Body>
                    {renderBody(rowData.description, rowData.updatedAt)}
                </Card.Body>
                <Card.Footer content={renderCardFooter(rowData)} />
            </Card>
        )
    }

    const height = document.documentElement.clientHeight

    return (
        <ListView
            dataSource={dataSource}
            renderFooter={() => renderFooter()}
            renderRow={renderRow}
            initialListSize={20}
            onScroll={() => {
                console.log('scroll')
            }}
            style={{
                height: height,
                overflow: 'auto'
            }}
        />
    )
}

export default Index
