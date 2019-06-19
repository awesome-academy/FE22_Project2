export const LOAD_DATA_PRODUCTS = "LOAD_DATA_PRODUCTS";
export const LOAD_DATA_CATEGORIES = "LOAD_DATA_CATEGORIES";
export const LOAD_DATA_USERS = "LOAD_DATA_USERS";
export const UPDATE_ITEMS_SELECTED = "UPDATE_ITEMS_SELECTED";

export function loadData(list) {
    return { type: LOAD_DATA_PRODUCTS, list }
}

export function loadDataCate(list) {
    return { type: LOAD_DATA_CATEGORIES, list }
}

export function loadDataUsers(list) {
    return { type: LOAD_DATA_USERS, list }
}

export function addItemSelected(item) {
    return { type: UPDATE_ITEMS_SELECTED, item }
}
