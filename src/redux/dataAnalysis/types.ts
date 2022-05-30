export enum AnalysisDataTypes {
    API_RESPONSE_SUCCESS = "@@dataAnalysis/API_RESPONSE_SUCCESS",
    API_RESPONSE_ERROR = "@@dataAnalysis/API_RESPONSE_ERROR",

    GET_DUMMYDATA = "@@dataAnalysis/GET_DUMMYDATA",
   // SEND_QUESTIONS = "@@dataAnalysis/SEND_QUESTIONS",


}

export interface AnalysisDataState {
    data:Array<any>;
}