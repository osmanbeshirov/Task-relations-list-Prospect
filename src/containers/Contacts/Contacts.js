import { React, useContext } from 'react'

import '../Contacts/contacts.css'
import { Table } from 'antd';
import { InfoCircleTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

import ContactContext from '../../context/ContactContext';


export default function Contacts() {

    const { contacts } = useContext(ContactContext)


    const data = contacts.map(contact => {
        return Object.assign(contact.contacts.contact.user, { id: contact.contacts.id, actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </> })
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

    // const myData = contacts.map((contact) => {
    //     return contact.contacts.user
    // });


    // console.log(myData)

    // const data = [
    // {
    //     key: '1',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <Link to={'/contacts/edit/1'}><EditTwoTone /></Link>  <DeleteTwoTone /> </>
    // },
    // {
    //     key: '2',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
    // },
    // {
    //     key: '3',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
    // },
    // {
    //     key: '4',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
    // },
    // {
    //     key: '5',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
    // },
    // {
    //     key: '6',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
    // },
    // {
    //     key: '7',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
    // },
    // {
    //     key: '8',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
    // },
    // {
    //     key: '9',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
    // },
    // {
    //     key: '10',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
    // },
    // {
    //     key: '11',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <Link to={'/contacts/edit/1'}><EditTwoTone /></Link>  <DeleteTwoTone /> </>
    // },
    // {
    //     key: '12',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
    // },
    // {
    //     key: '13',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
    // },
    // {
    //     key: '14',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
    // },
    // {
    //     key: '15',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
    // },
    // {
    //     key: '16',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
    // },
    // {
    //     key: '17',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
    // },
    // {
    //     key: '18',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
    // },
    // {
    //     key: '19',
    //     name: 'John',
    //     surname: "Brown",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
    // },
    // {
    //     key: '20',
    //     name: 'John',
    //     surname: "Osman",
    //     dadname: 'Newman',
    //     specality: 'IT engeneer',
    //     actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone /> </>
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
