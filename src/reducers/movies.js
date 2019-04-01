import { GET_MOVIES } from "../actions";

const initialState = {
    movies: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.results
            };
        default:
            return state;
    }
};