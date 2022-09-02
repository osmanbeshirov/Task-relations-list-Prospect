export const initialState = {
    contacts: [],

}

const contactReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_TABLE':

            return {

                ...state,
                contacts: [action.payload, ...state.contacts]

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

export default contactReducer;