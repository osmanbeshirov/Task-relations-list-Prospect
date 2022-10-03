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
        case "EDIT_CONTACT":
            console.log(action.payload)
            // const editedContact = state.contacts.find(contact => contact.id === action.payload.id)

            const newContacts = state.contacts.map(contact => {
              
                // if (contact.name === action.payload.name) {
                //     console.log('test')
                //     return Object.assign(contact, {
                //         name: action.payload.name, surname: action.payload.surname,
                //         dadname: action.payload.dadname, emails: action.payload.emails,
                //         details: action.payload.details, gender: action.payload.gender,
                //         specality: action.payload.specality, updates: action.payload.updates
                //     })
                // }
                return contact.name;
            })

            console.log(action.payload.name)

        default:
            return state;
    }
}

export default ContactReducer;