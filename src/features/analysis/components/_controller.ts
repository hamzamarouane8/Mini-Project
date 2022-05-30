import { useRedux } from "../../../hooks/useRedux";
import { getData } from "../../../redux/dataAnalysis/actions";

//------------------------------------------------------------------------------------------------------------

export default function useController() {
    const { dispatch, useAppSelector } = useRedux();

    const { isDataFetched, data, getDataLoading } = useAppSelector(state => ({
        isDataFetched: state.DummyData.isDataFetched,
        data: state.DummyData.data,
        getDataLoading: state.DummyData.getDataLoading
    }));

    function onSubmitForm(values: object) {
        dispatch(getData(values))
    
      }

    return {
        isDataFetched , data, getDataLoading , onSubmitForm
    }
}