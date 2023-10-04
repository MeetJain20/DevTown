
import CarDetails from "../../details/cardata";

const initialState = Object.values(CarDetails);

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_LIKE':
            const { carid } = action.payload;
            return state.map((car) =>
                car.carid === carid
                    ? {
                        ...car,
                        isLike: true
                    }
                    : car
            );
        case 'DECREMENT_LIKE':
            const { carid: decrementlikeid } = action.payload;
            return state.map((car) =>
                car.carid === decrementlikeid
                    ? {
                        ...car,
                        isLike: false
                    }
                    : car
            );
        default:
            return state;
    }
};

export default carReducer;
