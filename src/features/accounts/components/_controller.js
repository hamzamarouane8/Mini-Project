import { useContext, useEffect } from "react";
import { AccountContext } from "../ressources/accounts.context";


export default function useController(props) {
    const { state:{loading,listAccounts,accoutsHasError,accoutsErrorMsg}, dispatch } = useContext(AccountContext);

    useEffect(() => {
        dispatch({type:"req"} );
    }, [])

    useEffect(() => {
        
    }, [loading])

    return {
        loading , listAccounts
    }
}