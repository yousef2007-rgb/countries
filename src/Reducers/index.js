import { combineReducers } from "redux";
import Visablity from './Visablity';
import Data from "./Data";
const allReducers = combineReducers({
    Visablity,
    Data
});
export default allReducers;