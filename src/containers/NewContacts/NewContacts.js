import { React, useContext } from 'react'
import MainForm from '../../components/MainForm/MainForm'

import '../NewContacts/newContacts.css'

import ContactContext from '../../context/ContactContext'



export default function NewContacts() {

    const { name } = useContext(ContactContext)

    console.log(name)

    return (
        <div className='new-contacts'>
            <h1 className='title'>Yeni əlaqə yaratmaq formu</h1>

            <MainForm />
        </div>
    )
}
