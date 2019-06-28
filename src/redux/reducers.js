import { combineReducers } from 'redux';

import { products, productSelected } from './initReducers/products';
import { categories, updateCagtegoy } from './initReducers/categories';
import { users, usersUpdate } from './initReducers/users';
import { carts } from './initReducers/carts';

export const app = combineReducers({
    products,
    productSelected,
    categories,
    updateCagtegoy,
    users,
    usersUpdate,
    carts
});
