import React from 'react'

import '../Contacts/contacts.css'
import { Space, Table, Tag } from 'antd';
import { InfoCircleTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';


export default function Contacts() {

    const columns = [
        {
            title: 'Ad',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Soyad',
            dataIndex: 'surname',
            key: 'surname',
        },
        {
            title: 'Ata adı',
            dataIndex: 'dadname',
            key: 'dadname',
        },
        {
            title: 'İxtisas',
            dataIndex: 'specality',
            key: 'specality',
        },
        {
            title: '',
            dataIndex: 'actions',
            key: 'actions'
        }
    ]

    const data = [
        {
            key: '1',
            name: 'John',
            surname: "Brown",
            dadname: 'Newman',
            specality: 'IT engeneer',
            actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
        },
        {
            key: '2',
            name: 'John',
            surname: "Brown",
            dadname: 'Newman',
            specality: 'IT engeneer',
            actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
        },
        {
            key: '3',
            name: 'John',
            surname: "Brown",
            dadname: 'Newman',
            specality: 'IT engeneer',
            actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
        },
        {
            key: '4',
            name: 'John',
            surname: "Brown",
            dadname: 'Newman',
            specality: 'IT engeneer',
            actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
        },

    ];

    return (
        <div className='contacts'>
            <h1 className='contacts-header'>Əlaqələr siyahısı</h1>
            <Table className='contacts-table' columns={columns} dataSource={data} />
        </div>
    )
}
