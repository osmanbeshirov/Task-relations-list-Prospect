import { createContext, useReducer } from "react";

import contactReducer, { initialState } from "./contactReducer";

const ContactContext = createContext(initialState);

export const ContactProvider = ({ children }) => {
    const [state, dispatch] = useReducer(contactReducer, initialState)

    const addToTable = (name) => {
        dispatch({
            type: "ADD_TO_TABLE",
            payload: {
                contacts: name
            }
        })
    }

    const data = {
        contacts: state.contacts,
        addToTable,
        name: state.name
    }

    return <ContactContext.Provider value={data}>{children}</ContactContext.Provider>
}

export default ContactContext;