export const initialState = {
    contacts: [],
    name: 'Osman Bashirov'
}

const contactReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_TABLE':
            console.log("ADD_TO_TABLE", action.payload)
            return {
                ...state,
                products: action.payload
            }
        case 'EDIT_TO_CONTACT':
            console.log("EDIT_TO_CONTACT", action.payload)
            return {
                ...state,
                products: action.payload
            }

        default:
            return state;
    }
}

export default contactReducer;