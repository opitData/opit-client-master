import {
    createStore,
    applyMiddleware
} from 'redux';

import appReducers from './reducecrs/appReducers';
import {
    selectFile
}from './applyMiddleware/park.crud';

const store = createStore(
    appReducers,
    applyMiddleware(
        selectFile
    )
)

export default store;