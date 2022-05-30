import { AuthLoginActionTypes, AuthLoginState } from "./type";

export const INIT_STATE: AuthLoginState = {
    error: "",
    loading: false,
}

const Login = (state = INIT_STATE, action: any) => {

    switch (action.type) {
        case AuthLoginActionTypes.API_RESPONSE_SUCCESS:

            switch (action.payload.actionType) {
                case AuthLoginActionTypes.LOGIN_USER:
                    return {
                        ...state,
                        user: action.payload.data,
                        loading: false,
                        isUserLogin: true,
                        isUserLogout: false,
                    }
                case AuthLoginActionTypes.LOGOUT_USER:
                    return {
                        ...state,
                        loading: false,
                        isUserLogout: true,
                    };
                default:
                    return { ...state };
            }
        case AuthLoginActionTypes.LOGIN_USER: {
            return {
                ...state,
                loading: true,
                isUserLogin: false,
            };
        }
        default:
            return { ...state };
    }
}

export default Login;
