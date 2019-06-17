import { LOAD_DATA_PRODUCTS } from '../actions'

export const products = (state = [], action) => {
    switch (action.type) {
        case LOAD_DATA_PRODUCTS: {
            return action.list;
        }
        default:
            return state;
    }
};
