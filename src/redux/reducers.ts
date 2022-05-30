import { combineReducers } from "redux";
import Login from "./auth/login/reducer";
import DummyData from "./dataAnalysis/reducer";

export default combineReducers( {
        Login, DummyData
});