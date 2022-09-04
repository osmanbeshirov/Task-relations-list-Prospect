import { createContext, useReducer } from "react";

import contactReducer, { initialState } from "./contactReducer";

const ContactContext = createContext(initialState);

export const ContactProvider = ({ children }) => {
    const [state, dispatch] = useReducer(contactReducer, initialState)

    const addToTable = (contact) => {

        dispatch({
            type: "ADD_TO_TABLE",
            payload: [contact]
        })
    }

    const deleteFromTable = (contact) => {
        dispatch({
            type: "DELETE_FROM_TABLE",
            payload: contact
        })
    }

    const data = {
        contacts: state.contacts,
        addToTable,
        deleteFromTable

    }

    return <ContactContext.Provider value={data}>{children}</ContactContext.Provider>
}

export default ContactContext;