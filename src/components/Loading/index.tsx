import * as React from 'react'
import * as Loadable from 'react-loadable'
import { Icon } from 'antd-mobile'
import './index.scss'

export interface Loading extends Loadable.LoadingComponentProps {}

const Index: React.SFC<Loading> = props => {
    const showError = (error: any) => {
        return <div>{error}</div>
    }

    const showLoading = () => {
        return <Icon type={'loading'} />
    }


    return (
        <div styleName="loading-container">
            {/* {props.error && showError(props.error)}
            {props.isLoading && showLoading()} */}
            {showLoading()}
        </div>
    )
}

export default Index
