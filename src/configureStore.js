import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preLoadedState) {
    return createStore(
        rootReducer,
        preLoadedState,
        composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
    )
}