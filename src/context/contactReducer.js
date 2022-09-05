

export const initialState = {
    contacts: [],

}

const ContactReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_TABLE':

            const myContacts = action.payload.map(contact => {
                const newUser = Object.assign({}, contact.user, { id: state.contacts.length + 1 })
                // const newState = Object.assign({}, newUser, { actions: <><InfoCircleTwoTone /> <EditTwoTone /> <DeleteTwoTone onClick={deleteFromTable(newUser)} /> </> })
                return newUser
            })

          

            return {
                ...state,
                contacts: [{ user: myContacts[0] }, ...state.contacts]
            }

        case "DELETE_FROM_TABLE":
            // console.log('DELETE_FROM_TABLE', action.payload)

            const filterContacts = state.contacts.map(contact => {
                return contact.user
            }).filter(profile => {
                return profile.id !== action.payload.id
            })

            const resultContacts = filterContacts.map(contact => {
                return { user: contact }
            })

            return Object.assign(state, { contacts: resultContacts })

        default:
            return state;
    }
}

export default ContactReducer;