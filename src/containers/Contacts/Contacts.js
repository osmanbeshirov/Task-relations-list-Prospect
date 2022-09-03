import { React, useContext } from 'react'

import { Link } from 'react-router-dom';

import '../Contacts/contacts.css'
import { Table } from 'antd';
import { InfoCircleTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

import ContactContext from '../../context/ContactContext';
import { render } from '@testing-library/react';


export default function Contacts() {

    const { contacts, deleteFromTable } = useContext(ContactContext)

    const data = contacts.map(contact => {
        Object.assign(contact.user, { actions: <><InfoCircleTwoTone /> <Link to='edit/5'><EditTwoTone /></Link>  <DeleteTwoTone onClick={() => deleteFromTable(contact.user)} /> </> })

        return contact.user;
    })

    console.log(contacts);


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



    // const data = [
    // {
    //     key: '1',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <Link to={'/contacts/edit/1'}><EditTwoTone /></Link>  <DeleteTwoTone /> </>
    // },
    // ];


    return (
        <div className='contacts'>
            <div className='contacts-main'>
                <h1 className='contacts-header'>Əlaqələr siyahısı</h1>
                <Table className='contacts-table' columns={columns} dataSource={data} />
            </div>
        </div>

    )
}
