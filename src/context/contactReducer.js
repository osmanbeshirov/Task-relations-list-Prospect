export const initialState = {
    contacts: [],
}

const ContactReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_TABLE':
            return { contacts: [action.payload, ...state.contacts] }
        case "REMOVE_FROM_TABLE":
            const updatedContacts = state.contacts.filter(contact => contact.id !== action.payload.id)

            return { contacts: updatedContacts }
        default:
            return state;
    }
}

export default ContactReducer;