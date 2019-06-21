import { combineReducers } from 'redux';

import { products, productSelected } from './initReducers/products';
import { categories } from './initReducers/categories';
import { users } from './initReducers/users';
import { carts } from './initReducers/carts';

export const app = combineReducers({
    products,
    productSelected,
    categories,
    users,
    carts
});
