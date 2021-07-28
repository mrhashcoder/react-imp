
import {combineReducers} from 'redux'
import authReducer from './authReducer'


// Add More Reducers Here too

const reducers = combineReducers({
    auth : authReducer,
});

export default reducers;