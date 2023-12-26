    import {
    ADD_FILTER,
    REMOVE_FILTER,
    REMOVE_ALL_FILTERS,
    } from "./filter-actions";

    export const filterReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FILTER: {
            if (!state.includes(action.filter)) {
                return [...state, action.filter];
            }
        return state;
        }

        case REMOVE_FILTER: {
            return state.filter((item)=> item !== action.filter)
        }

        case REMOVE_ALL_FILTERS: {
        return [];
        }

        default: {
        return state;
        }
    }
    };
