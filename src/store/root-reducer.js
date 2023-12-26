import { combineReducers } from "redux";
import { positionReduer } from "./positions/position-reducer";
import { filterReducer } from "./filters/filter-reducer";

export const rootReducer = combineReducers({
    positions: positionReduer,
    filters: filterReducer,
});
