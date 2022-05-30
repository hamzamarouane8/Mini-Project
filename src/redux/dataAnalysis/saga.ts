import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Redux State
import { AnalysisDataTypes } from "./types";

// actions
import {
    analysisResponseSucess,
    analysisApiResponseError,
} from "./actions";

// api
import {
    getDummyData as getDummyDataApi,
    getDummyDataFake as getDummyDataFakeApi,

} from "../../api/index";

function* getDummyData() {
    try {
        if (process.env.REACT_APP_DEFAULTAUTH === 'fake') {
            const response: Promise<any> = yield call(getDummyDataFakeApi);
            yield call(delay, 2000);

            yield put(
                analysisResponseSucess(AnalysisDataTypes.GET_DUMMYDATA, response)
            );
        } else {
            const response: Promise<any> = yield call(getDummyDataApi);
            yield put(
                analysisResponseSucess(AnalysisDataTypes.GET_DUMMYDATA, response)
            );
        }

    } catch (error: any) {
        yield put(
            analysisApiResponseError(AnalysisDataTypes.GET_DUMMYDATA, error)
        );
    }
}

const delay = (time:any)=> new Promise(resolve => setTimeout(resolve, time));


export function* watchGetDummyData() {
    yield takeEvery(AnalysisDataTypes.GET_DUMMYDATA, getDummyData);
}

function* analysisDataSaga() {
    yield all([
        fork(watchGetDummyData),
    ]);
}

export default analysisDataSaga;
