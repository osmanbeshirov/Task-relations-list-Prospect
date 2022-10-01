export const initialState = {
    contacts: [],
}

const ContactReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_TABLE':
            return { contacts: [action.payload, ...state.contacts] }

        default:
            return state;
    }
}

export default ContactReducer;