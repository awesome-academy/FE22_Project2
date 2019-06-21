export const LOAD_DATA_PRODUCTS = "LOAD_DATA_PRODUCTS";
export const LOAD_DATA_CATEGORIES = "LOAD_DATA_CATEGORIES";
export const LOAD_DATA_SUB_CATEGORIES = "LOAD_DATA_SUB_CATEGORIES";
export const LOAD_DATA_USERS = "LOAD_DATA_USERS";
export const LOAD_DATA_CARTS = "LOAD_DATA_CARTS";
export const UPDATE_ITEMS_SELECTED = "UPDATE_ITEMS_SELECTED";
export const UPDATE_ITEMS_USERS = "UPDATE_ITEMS_USERS";
export const UPDATE_ITEMS_CATEGORIES = "UPDATE_ITEMS_CATEGORIES";
export const UPDATE_ITEMS_SUB_CATEGORIES = "UPDATE_ITEMS_SUB_CATEGORIES";

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
