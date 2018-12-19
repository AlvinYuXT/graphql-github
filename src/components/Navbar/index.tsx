import * as React from 'react'
import { NavBar, Icon } from 'antd-mobile'

const Navbar: React.SFC<any> = (props) => {
    const { title } = props
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
            {title}
        </NavBar>
    )
}

export default Navbar
