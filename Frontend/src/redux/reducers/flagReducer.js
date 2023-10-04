

const initialState = 1

const flagReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_FLAG':
            return state === 0 ? 1 : 0;
        default:
            return state;
    }
};

export default flagReducer;
