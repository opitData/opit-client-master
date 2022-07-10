import produce, { current } from 'immer';
import createReducer from './reducerUtils';
import { reset } from './appReducers';
import { actions } from '../actions';

const initialState = {
    tab: 'Home'
}

const general = {
    reset(state) {
        state = reset(state, initialState);
    },
    setTab(state, action) {
        state.tab = action.payload
    }
}

export default produce((state, action) =>
    createReducer(state, action, general), initialState);