import React, { useContext } from "react";
import { AccountContext } from "../ressources/accounts.context";
import useController from "./_controller";

export default () => {
    const { loading, listAccounts } = useController();

    /*if (loading)
        return <>Loading...</>;
*/
    return (
        <>
            List accounts goes here.
        </>
    )
}