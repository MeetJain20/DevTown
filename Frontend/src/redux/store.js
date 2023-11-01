import { configureStore } from '@reduxjs/toolkit';
import carReducer from './reducers/carReducer';
import flagReducer from './reducers/flagReducer';
import searchReducer from './reducers/searchReducer';
import filterReducer from './reducers/filterReducer';

const store = configureStore({
    reducer: {
        cars: carReducer,
        flag: flagReducer,
        searchtext: searchReducer,
        filtertext: filterReducer,
    },
});

export default store;