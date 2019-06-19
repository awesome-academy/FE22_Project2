import { combineReducers } from 'redux';

import { products, productSelected } from './initReducers/products';

export const app = combineReducers({
    products,
    productSelected
});
