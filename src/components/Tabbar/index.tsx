import React, {useState} from 'react'

import { TabBar } from 'antd-mobile'
import './index.scss'

const Item = TabBar.Item

const Tabbar: React.SFC<any> = () => {
    const [selected, setSelected] = useState('index')

    const onPress = (selected: string) => {
        setSelected(selected)
    }

    return (
        <div styleName="tabbar-container">
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
            >
                <Item
                    title="首页"
                    icon={
                        <div
                            style={{
                                width: '22px',
                                height: '22px',
                                background:
                                    'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                            }}
                        />
                    }
                    selectedIcon={
                        <div
                            style={{
                                width: '22px',
                                height: '22px',
                                background:
                                    'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                            }}
                        />
                    }
                    selected={selected === 'index'}
                    onPress={() => onPress('index')}
                />
                <Item
                    title="个人"
                    icon={{
                        uri:
                            'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg'
                    }}
                    selectedIcon={{
                        uri:
                            'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'
                    }}
                    key="my"
                    selected={selected === 'my'}
                    onPress={() => {onPress('my')}}
                />
            </TabBar>
        </div>
    )
}

export default Tabbar
