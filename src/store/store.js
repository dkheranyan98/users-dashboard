import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk" 
import global from './reducer';

const store = createStore(
    combineReducers({
        global,
    }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;