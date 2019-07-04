import {
    FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS,
    LOAD_DATA_CARTS,
    LOAD_DATA_CATEGORIES,
    LOAD_DATA_ROLE,
    LOAD_DATA_SUB_CATEGORIES,
    LOAD_DATA_USERS, REDIRECT, REDIRECT_CATEGORY, REDIRECT_PRODUCTS, REDIRECT_SUB_CATEGORY,
    UPDATE_ITEMS_CATEGORIES,
    UPDATE_ITEMS_PRODUCTS,
    UPDATE_ITEMS_SELECTED,
    UPDATE_ITEMS_SUB_CATEGORIES,
    UPDATE_ITEMS_USERS
} from "./types";

const urlProducts = process.env.REACT_APP_PRODUCTS;

export function loadData() {
    return (dispatch) => {
        dispatch(getData());
        return fetch(urlProducts)
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch(getDataSuccess(result));
                },
                (error) => {
                    dispatch(getDataFailure());
                    throw (error);
                }
            );
    }
}

export function loadDataCate(list) {
    return { type: LOAD_DATA_CATEGORIES, list }
}

export function loadDataSubCate(list) {
    return { type: LOAD_DATA_SUB_CATEGORIES, list }
}

export function loadDataUsers(list) {
    return { type: LOAD_DATA_USERS, list }
}

export function loadDataRole(list) {
    return { type: LOAD_DATA_ROLE, list }
}

export function loadDataCarts(list) {
    return { type: LOAD_DATA_CARTS, list }
}

export function addItemSelected(item) {
    return { type: UPDATE_ITEMS_SELECTED, item }
}

export function updateItemUsers(item) {
    return { type: UPDATE_ITEMS_USERS, item }
}

export function updateItemCategory(item) {
    return { type: UPDATE_ITEMS_CATEGORIES, item }
}

export function updateItemSubCategory(item) {
    return { type: UPDATE_ITEMS_SUB_CATEGORIES, item }
}

export function updateItemProduct(item) {
    return { type: UPDATE_ITEMS_PRODUCTS, item }
}

export function redirect(item) {
    return { type: REDIRECT, item }
}

export function redirectCategory(item) {
    return { type: REDIRECT_CATEGORY, item }
}

export function redirectSubCategory(item) {
    return { type: REDIRECT_SUB_CATEGORY, item }
}

export function redirectProducts(item) {
    return { type: REDIRECT_PRODUCTS, item }
}

export function getData() {
    return { type: FETCH_DATA }
}

export function getDataSuccess(data) {
    return { type: FETCH_DATA_SUCCESS, data }
}

export function getDataFailure() {
    return { type: FETCH_DATA_FAILURE }
}
