import { React, useContext } from 'react'

import { Link } from 'react-router-dom';

import '../Contacts/contacts.css'
import { Table } from 'antd';
import { InfoCircleTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

import UserModal from '../../components/UserModal/UserModal'

import ContactContext from '../../context/ContactContext';
import NotFound from '../../components/NotFound/NotFound';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';

export default function Contacts() {

    const { contacts } = useContext(ContactContext)
    
    const data = contacts.map((contact, index) => {
        Object.assign(contact, { id: index + 1, key: index + 1, actions: <> <UserModal currentUserDatas={contact}> <InfoCircleTwoTone /> </UserModal> <Link to={`edit/${contact.id}`}><EditTwoTone /></Link> <ConfirmModal removedUser={contact}> <DeleteTwoTone /> </ConfirmModal>   </> })

        return contact;
    })


    const columns = [
        {
            title: 'Ad',
            dataIndex: 'name',
            key: 'name',

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

    return (
        <div className='contacts'>
            <div className='contacts-main'>
                <h1 className='contacts-header'>Əlaqələr siyahısı</h1>

                {data.length > 0 ? <Table className='contacts-table' columns={columns} dataSource={data} /> : <NotFound />}

            </div>
        </div>
    )
}
