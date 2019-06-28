import { combineReducers } from 'redux';

import { products, productSelected, updateProduct } from './initReducers/products';
import { categories, updateCagtegoy } from './initReducers/categories';
import { subCategory, updateSubCagtegoy } from "./initReducers/subCategory";
import { users, usersUpdate } from './initReducers/users';
import {carts, updateCarts} from './initReducers/carts';
import {roles} from "./initReducers/role";

import {
    redirectFeature,
    redirectCategory,
    redirectSubCategory,
    redirectProducts,
    redirectCarts,
    checkButtonCarts
} from "./initReducers/control";

export const app = combineReducers({
    products,
    productSelected,
    updateProduct,
    categories,
    updateCagtegoy,
    subCategory,
    updateSubCagtegoy,
    users,
    usersUpdate,
    roles,
    carts,
    updateCarts,
    redirectFeature,
    redirectCategory,
    redirectSubCategory,
    redirectProducts,
    redirectCarts,
    checkButtonCarts
});
