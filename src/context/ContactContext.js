import { createContext, useReducer } from "react";

import { notification } from 'antd';

import contactReducer, { initialState } from "./contactReducer";

const ContactContext = createContext(initialState);

export const openNotificationWithIcon = (type, messageTitle, messageContent, contactDetails) => {
    notification[type]({
        message: messageTitle,
        description:
            `${contactDetails} ${messageContent}`
    });
};

export const ContactProvider = ({ children }) => {
    const [state, dispatch] = useReducer(contactReducer, initialState)

    const addToTable = (contact) => {
        openNotificationWithIcon('success', 'Uğurlu əməliyyat', 'uğurla əlavə edildi', `${contact.name}  ${contact.surname}`)

        dispatch({
            type: "ADD_TO_TABLE",
            payload: contact
        })
    }

    const removeFromTable = (contact) => {
        
        openNotificationWithIcon('error', 'Uğurlu əməliyyat', 'uğurla siyahıdan çıxarıldı', `${contact.name}  ${contact.surname}`)

        dispatch({
            type: "REMOVE_FROM_TABLE",
            payload: contact
        })
    }

    const editContact = (contact) => {

        dispatch({
            type: "EDIT_CONTACT",
            payload: contact
        })
    }


    const data = {
        contacts: state.contacts,
        selectedUser: state.selectedUser,
        addToTable,
        removeFromTable,
        editContact,
    }

    return <ContactContext.Provider value={data}>{children}</ContactContext.Provider>
}

export default ContactContext;