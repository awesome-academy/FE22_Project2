import { LOAD_DATA_SUB_CATEGORIES, UPDATE_ITEMS_SUB_CATEGORIES } from '../types';

export const subCategory = (state = [], action) => {
    switch (action.type) {
        case LOAD_DATA_SUB_CATEGORIES: {
            if (action.list) {
                state = [...action.list];
                return state;
            }
            return state;
        }
        default:
            return state;
    }
};

export const updateSubCagtegoy = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_ITEMS_SUB_CATEGORIES: {
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
