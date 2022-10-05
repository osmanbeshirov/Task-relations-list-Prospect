import { React, useContext } from 'react'
import MainForm from '../../components/MainForm/MainForm'

import { useParams } from 'react-router-dom'

import '../NewContacts/newContacts.css'
import ContactContext from '../../context/ContactContext';

export default function EditContacts() {

  const params = useParams();

  const { contacts } = useContext(ContactContext)

  const updatedContacts = contacts.filter(contact => contact.id === Number(params.id))

  return (
    <div className='new-contacts'>
      <h1 className='title'>Düzəliş etmə səhifəsi</h1>

      <MainForm userDatas={updatedContacts[0]} />
    </div>
  )
}
