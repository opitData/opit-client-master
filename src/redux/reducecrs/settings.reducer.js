import produce, { current } from 'immer';
import createReducer from './reducerUtils';
import { reset } from './appReducers';
import { actions } from '../actions';

const initialState = {
    language: {
        index: 0,
        language: 'עברית'
    }
}

const settings = {
    reset(state) {
        state = reset(state, initialState);
    },
    setLanguage(state, action) {
        state.language = action.payload;
    }
}

export default produce((state, action) =>
    createReducer(state, action, settings), initialState);