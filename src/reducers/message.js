const initialState = {
    messageVisibility: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_MESSAGE':
            return state;
        default:
            return state;
    }
};