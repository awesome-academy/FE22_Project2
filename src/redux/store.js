import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { app } from './reducers';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);

export function configureStore(initialState) {
    return createStoreWithMiddleware(app, initialState);
}