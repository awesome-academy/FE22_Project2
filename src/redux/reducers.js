import { combineReducers } from 'redux';

import { products, productSelected } from './initReducers/products';
import { categories } from './initReducers/categories';

export const app = combineReducers({
    products,
    productSelected,
    categories
});
