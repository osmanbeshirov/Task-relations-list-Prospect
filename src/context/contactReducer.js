import { InfoCircleTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import { useContext } from 'react';
import ContactContext from './ContactContext';

export const initialState = {
    contacts: [],

}


const ContactReducer = (state, action) => {

    const { deleteFromTable } = useContext(ContactContext);
   

    switch (action.type) {
        case 'ADD_TO_TABLE':



            const myContacts = action.payload.map(contact => {

                return Object.assign({}, contact.user, { id: 1, actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone onClick={() => deleteFromTable(contact.user)} /> </> })
            })

            // console.log(myContacts)

            return {
                ...state,
                contacts: [{ user: myContacts[0] }, ...state.contacts]
            }

        case "DELETE_FROM_TABLE":
            console.log('DELETE_FROM_TABLE', action.payload)
            return {
                // ...state,
                // contacts: []
            }


        case 'EDIT_TO_CONTACT':
            console.log("EDIT_TO_CONTACT", action.payload)
            return {
                ...state,
                contacts: action.payload
            }

        default:
            return state;
    }
}

export default ContactReducer;