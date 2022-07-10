import produce, { current } from 'immer';
import createReducer from './reducerUtils';
import { reset } from './appReducers';

const initialState = {
    parkingRequest: {
        applicant: null,
        guest: null,
        startTime: null,
        endTime: null,
        day: -1,
        productionDate: null,
    },
    // requestsForToday: [],
    // requestsForTomorrow: [],
    reqList: []
}

const properties = {
    reset(state) {
        state = reset(state, initialState);
    },
    setParkingRequest(state, action) {
        state.parkingRequest[action.payload.key] = action.payload.value;
    },
    setParkingRequestsList(state, action) {
        let date = new Date()
        // state.parkingRequest.day == date.getDay() ?
        //     state.requestsForToday.push(state.parkingRequest)
        //     :
        date.getDay() == state.parkingRequest.day ?
            state.reqList.unshift(state.parkingRequest) :
            state.reqList.push(state.parkingRequest)
        // state.parkingRequest.guest = null;
        // state.parkingRequest.productionDate = null;
        state.parkingRequest = initialState.parkingRequest;
    }
}
export default produce((state, action) =>
    createReducer(state, action, properties), initialState);
