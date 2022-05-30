import { AnalysisDataTypes } from "./types";

export const analysisResponseSucess = (actionType: string, data: any) => ({
    type: AnalysisDataTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data }
});

export const analysisApiResponseError = (actionType: string, error: any) => ({
    type: AnalysisDataTypes.API_RESPONSE_ERROR,
    payload: { actionType, error }
});

export const getData= (data:any) =>{
    return{
        type: AnalysisDataTypes.GET_DUMMYDATA,
        payload: {data}
    }
}
