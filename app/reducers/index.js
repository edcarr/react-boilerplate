import { combineReducers } from 'redux';
import app from './app'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    routing: routerReducer,
    app,
});

export default rootReducer;