import {
    FETCH_DATA, FETCH_DATA_FAILURE,
    FETCH_DATA_SUCCESS,
    UPDATE_ITEMS_PRODUCTS,
    UPDATE_ITEMS_SELECTED
} from '../types';

const itemSelected = JSON.parse(localStorage.getItem('id-item--cart'));
const initialState = {
    data: [],
    isFetching: false,
    error: false
};

export const products = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: [],
                isFetching: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return state
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
