export const LOAD_DATA_PRODUCTS = "LOAD_DATA_PRODUCTS";
export const LOAD_DATA_CATEGORIES = "LOAD_DATA_CATEGORIES";
export const LOAD_DATA_SUB_CATEGORIES = "LOAD_DATA_SUB_CATEGORIES";
export const LOAD_DATA_USERS = "LOAD_DATA_USERS";
export const LOAD_DATA_ROLE = "LOAD_DATA_ROLE";
export const LOAD_DATA_CARTS = "LOAD_DATA_CARTS";

export const UPDATE_ITEMS_SELECTED = "UPDATE_ITEMS_SELECTED";
export const UPDATE_ITEMS_USERS = "UPDATE_ITEMS_USERS";
export const UPDATE_ITEMS_CATEGORIES = "UPDATE_ITEMS_CATEGORIES";
export const UPDATE_ITEMS_SUB_CATEGORIES = "UPDATE_ITEMS_SUB_CATEGORIES";
export const UPDATE_ITEMS_PRODUCTS = "UPDATE_ITEMS_PRODUCTS";
export const UPDATE_ITEMS_CARTS = "UPDATE_ITEMS_CARTS";

export const REDIRECT = "REDIRECT";
export const REDIRECT_CATEGORY = "REDIRECT_CATEGORY";
export const REDIRECT_SUB_CATEGORY = "REDIRECT_SUB_CATEGORY";
export const REDIRECT_PRODUCTS = "REDIRECT_PRODUCTS";
export const REDIRECT_CARTS = "REDIRECT_CARTS";

export const CHECK_BUTTON = "CHECK_BUTTON";

export function loadData(list) {
    return { type: LOAD_DATA_PRODUCTS, list }
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

export function updateItemCart(item) {
    return { type: UPDATE_ITEMS_CARTS, item }
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

export function redirectCarts(item) {
    return { type: REDIRECT_CARTS, item }
}

export function checkButton(list) {
    return { type: CHECK_BUTTON, list }
}
