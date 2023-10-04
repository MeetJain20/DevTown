import { configureStore } from '@reduxjs/toolkit';
import carReducer from './reducers/carReducer';
import flagReducer from './reducers/flagReducer';
import searchReducer from './reducers/searchReducer';

const store = configureStore({
    reducer: {
        cars: carReducer,
        flag: flagReducer,
        searchtext: searchReducer,
    },
});

export default store;