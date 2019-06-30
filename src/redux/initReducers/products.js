import {LOAD_DATA_PRODUCTS, UPDATE_ITEMS_PRODUCTS, UPDATE_ITEMS_SELECTED} from '../actions';

const itemSelected = JSON.parse(localStorage.getItem('id-item--cart'));

export const products = (state = [], action) => {
    switch (action.type) {
        case LOAD_DATA_PRODUCTS: {
            state = [...action.list];
            return state;
        }
        default:
            return state;
    }
};

export const productSelected = (state = itemSelected, action) => {
    switch (action.type) {
        case UPDATE_ITEMS_SELECTED: {
            if (!action.item || !state) return [];
            state = [...action.item];
            return state;
        }
        default:
            return state;
    }
};

export const updateProduct = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_ITEMS_PRODUCTS: {
            if (action.item) {
                state = {...action.item};
                return state;
            }
            return state;
        }
        default:
            return state;
    }
};
