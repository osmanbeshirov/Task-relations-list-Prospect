import { React, useContext, useState } from 'react'

import { Link } from 'react-router-dom';

import '../Contacts/contacts.css'
import { Table } from 'antd';
import { InfoCircleTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

import ContactContext from '../../context/ContactContext';
import NotFound from '../../components/NotFound/NotFound';
import { render } from '@testing-library/react';
import UserModal from '../../components/UserModal/UserModal';


export default function Contacts() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModalNow = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const { contacts, removeFromTable } = useContext(ContactContext)


    const data = contacts.map((contact, index) => {
        Object.assign(contact, { id: index + 1, key: index + 1, actions: <> <InfoCircleTwoTone onClick={render(<UserModal showModalNow={showModalNow} handleOk={handleOk} handleCancel={handleCancel} isModalOpen={isModalOpen} />)} /> <Link to={`edit/${contact.id}`}><EditTwoTone /></Link>  <DeleteTwoTone onClick={() => removeFromTable(contact)} /> </> })

        return contact;
    })

    console.log(data)

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
