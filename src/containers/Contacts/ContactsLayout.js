import React from 'react'

import '../Contacts/contacts.css'

import { Outlet } from 'react-router-dom'

export default function ContactsLayout() {
    return (
        <div className='contacts'>
            <Outlet />
        </div>
    )
}
