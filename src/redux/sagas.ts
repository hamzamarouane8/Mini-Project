import { all } from "redux-saga/effects";
import loginSaga from "./auth/login/saga";
import dummYDataSaga from "./dataAnalysis/saga";

export default function* rootSaga() {
    yield all([
        loginSaga(),
        dummYDataSaga()
    ])
}