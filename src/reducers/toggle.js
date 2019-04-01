import { TOGGLE_MESSAGE } from '../actions';

const initialState = {
    messageVisibility: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MESSAGE:
            return {
                ...state,
                messageVisibility: !state.messageVisibility
            };
        default:
            return state;
    }
};