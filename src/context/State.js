import { React, useReducer, useState } from 'react'
import Context from '../context/context'

export default function State({ children }) {

    const reducerFunction = (state, action) => {
        switch (action.type) {
            case 'ADD_TO_LIST':
                return action.payload
            case 'DELETE_FROM_LIST':
                return {
                    ...state,
                    count: state.count - 1
                }
            default:
                return state;
        }
    }

    const [name, setName] = useState('');

    const initialData = {
        message: 'this message from the context',
        contacts: [],
        setName,
        name
    }

    const [state, dispatch] = useReducer(reducerFunction, initialData)

    return (
        <Context.Provider value={initialData}>
            {children}
        </Context.Provider>
    )
}
