import { React, useContext } from 'react'
import MainForm from '../../components/MainForm/MainForm'

import '../NewContacts/newContacts.css'

import Context from '../../context/context'


export default function NewContacts() {

    // const { name } = useContext(Context)

    // console.log(name)

    return (
        <div className='new-contacts'>
            <h1 className='title'>Yeni əlaqə yaratmaq formu</h1>

            <MainForm />
        </div>
    )
}
