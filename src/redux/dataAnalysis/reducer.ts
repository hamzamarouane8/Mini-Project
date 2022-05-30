// types
import { AnalysisDataState,AnalysisDataTypes } from "./types";

export const INIT_STATE: AnalysisDataState = {
  data: [],
};

const DummyData = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case AnalysisDataTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case AnalysisDataTypes.GET_DUMMYDATA:
          return {
            ...state,
            data: action.payload.data,
            isDataFetched: true,
            getDataLoading: false,
          };
        default:
          return { ...state };
      }

    case AnalysisDataTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case AnalysisDataTypes.GET_DUMMYDATA:
          return {
            ...state,
            isDataFetched: false,
            getDataLoading: false,
            error: action.payload.error
          };
        default:
          return { ...state };
      }

    case AnalysisDataTypes.GET_DUMMYDATA: {
      return {
        ...state,
        getDataLoading: true,
        isDataFetched: false,
      };
    }
    default:
      return { ...state };
  }
};

export default DummyData;
