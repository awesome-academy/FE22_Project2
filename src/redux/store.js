import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import { app } from './reducers';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export function configureStore(initialState) {
    return createStoreWithMiddleware(app, initialState);
}