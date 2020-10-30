import { createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './reducers/Movie-reducer';


export default createStore(reducer,applyMiddleware(createLogger(),thunkMiddleware));