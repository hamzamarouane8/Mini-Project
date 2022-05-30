import { TypedUseSelectorHook ,useSelector , useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store"

const useRedux = () =>{
    const dispatch: AppDispatch = useDispatch();
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    return{dispatch,useAppSelector}
}

export {useRedux};