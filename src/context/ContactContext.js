import { createContext, useReducer } from "react";

import contactReducer, { initialState } from "./contactReducer";

const ContactContext = createContext(initialState);

export const ContactProvider = ({ children }) => {
    const [state, dispatch] = useReducer(contactReducer, initialState)

    const addToTable = (contact, id) => {

        dispatch({
            type: "ADD_TO_TABLE",
            payload: {
                contacts: {
                    contact, id
                }
            }
        })
    }

    const data = {
        contacts: state.contacts,
        addToTable,

    }

    return <ContactContext.Provider value={data}>{children}</ContactContext.Provider>
}

export default ContactContext;