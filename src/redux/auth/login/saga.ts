import { call, put, takeEvery } from "redux-saga/effects";
import { postFakeLogin } from "../../../api/auth";
import { setLoggeedInUser } from "../../../helpers/helper";
import { authLoginApiResponseError, authLoginApiResponseSucess } from "./action";
import { AuthLoginActionTypes } from "./type";


function* loginUser({payload:{user}}:any){
    try{
        if(process.env.REACT_APP_DEFAULTAUTH === 'fake'){
            const response ={user:{
                username: user.username,
                password: user.password
            }};

            setLoggeedInUser(response.user);

            yield put(
                authLoginApiResponseSucess(AuthLoginActionTypes.LOGIN_USER, response)
            );
        }
    }catch(error: any){
        yield put(
            authLoginApiResponseError(AuthLoginActionTypes.LOGIN_USER,error)
        );
    }
}

function* loginSaga() {
    yield takeEvery(AuthLoginActionTypes.LOGIN_USER, loginUser);
  }
  
  export default loginSaga;