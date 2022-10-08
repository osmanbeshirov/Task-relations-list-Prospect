export const initialState = {
    contacts: [],
}

const ContactReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_TABLE':
            return { contacts: [...state.contacts, action.payload] }
        case "REMOVE_FROM_TABLE":
            const updatedContacts = state.contacts.filter(contact => contact.id !== action.payload.id)

            return { contacts: updatedContacts }
        case "EDIT_CONTACT":

            state.contacts.map(contact => {

                if (contact.id === action.payload.id) {

                    return Object.assign(contact, {
                        name: action.payload.name, surname: action.payload.surname,
                        dadname: action.payload.dadname, emails: action.payload.email,
                        details: action.payload.details, gender: action.payload.gender,
                        specality: action.payload.specality, updates: action.payload.updates
                    })

                }
                return contact;
            })

        default:
            return state;
    }
}

export default ContactReducer;