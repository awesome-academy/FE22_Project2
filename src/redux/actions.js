export const LOAD_DATA_PRODUCTS = "LOAD_DATA_PRODUCTS";

export function loadData(list) {
    return { type: LOAD_DATA_PRODUCTS, list }
}
