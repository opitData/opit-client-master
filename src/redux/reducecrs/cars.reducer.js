import produce, { current } from 'immer';
import createReducer from './reducerUtils';
import { reset } from './appReducers';
import { actions } from '../actions';

const initialState = {
    cars: [],
    countNumParking: 0,
    countNumCars: 0
}

const cars = {
    reset(state) {
        state = reset(state, initialState);
    },
    addCar(state, action) {
        let flagNewCar = false;

        //add count of num parking for user
        state.countNumParking += action.payload.parkings.length;

        //check if car exist else create its for user
        state.cars && state.cars.forEach((car, index) => {
            if (!flagNewCar && car._id === action.payload._id) {
                state.cars[index] = { ...action.payload };
                flagNewCar = true
            }
        })
        if (!flagNewCar) {
            state.cars = !state.cars ? [] : state.cars;
            state.cars.push(action.payload);
        }
    },
    deleteCar(state, action) {
        state.cars = state.cars.filter(car => car._id != action.payload);
    },
    setCountNumParking(state, action) {
        state.countNumParking = action.payload;
    },
    setCountNumCars(state, action) {
        state.countNumCars += action.payload;
    }
}

export default produce((state, action) =>
    createReducer(state, action, cars), initialState);