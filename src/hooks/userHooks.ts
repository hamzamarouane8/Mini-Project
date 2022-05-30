import { useState } from "react";
import { getLoggedinUser } from "../api/apiCore";
import { useRedux } from "./useRedux"

export const useProfile = () => {

    const { useAppSelector } = useRedux();

    const userProfileSession = getLoggedinUser();

    const [loading] = useState(userProfileSession ? false : true);
    const [userProfile, setUserFrofile] = useState(
        userProfileSession ? {...userProfileSession } : null
    )

    return { userProfile , loading}
}