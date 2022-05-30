import React, { useReducer } from "react"

const initialState = {
    listAccounts: null,
    loading: false,
    accoutsHasError: false,
    accoutsErrorMsg: null
};

export const AccountContext = React.createContext(initialState);

const accountsReducer = ((state, { type, payload }) => {
    switch (type) {
        case 'req':
            return { ...state, loading: true };
        case 'success':
            return { ...state, loading: false, listAccounts: payload };
        case 'error':
            return { ...state, loading: false, accoutsHasError: true, accoutsErrorMsg: payload.errorMsg };
        default:
            throw new Error();
    }
});

export const AccountsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(accountsReducer, initialState);


    return (
        <AccountContext.Provider value={{ state, dispatch }}>
            {children}
        </AccountContext.Provider>
    )
};