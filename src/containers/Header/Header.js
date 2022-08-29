import React from 'react'
import '../Header/header.css'

import { Menu } from 'antd'
import { ContactsOutlined } from '@ant-design/icons';
import NewRelation from '../../components/NewRelation/NewRelation';


export default function Header() {
    return (
        <div>
            <Menu className='header-wrapper' mode="horizontal">
                <Menu.Item key="contacts" icon={<ContactsOutlined style={{ fontSize: '30px' }} />}>
                    Kontaktlar
                </Menu.Item>
                <Menu.Item key="new_contact">
                    <NewRelation />
                </Menu.Item>
            </Menu>

        </div>
    )
}
