import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import userReducer from "./userReducer";


let redusers = combineReducers({
    usersPage : userReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(redusers, applyMiddleware(thunkMiddleware));
//
window.store = store;

export default store;