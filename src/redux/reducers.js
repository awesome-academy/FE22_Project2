import { combineReducers } from 'redux';

import { products } from './initReducers/products';

export const app = combineReducers({
    products
});