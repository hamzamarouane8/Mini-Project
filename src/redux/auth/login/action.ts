import { AuthLoginActionTypes } from "./type";

export const authLoginApiResponseSucess = (actionType: string, data: any) => ({
    type: AuthLoginActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data }
});

export const authLoginApiResponseError = (actionType: string, error: any) => ({
    type: AuthLoginActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error }
});

export const loginUser= (user:any) =>{
    return{
        type: AuthLoginActionTypes.LOGIN_USER,
        payload: {user}
    }
}
