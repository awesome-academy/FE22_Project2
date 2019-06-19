import { combineReducers } from 'redux';

import { products, productSelected } from './initReducers/products';
import { categories } from './initReducers/categories';
import { users } from './initReducers/users';

export const app = combineReducers({
    products,
    categories,
    users,
    productSelected
});
