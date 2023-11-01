

const initialState = ""

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_TEXT':
            return action.payload;
        default:
            return state;
    }
};

export default filterReducer;
