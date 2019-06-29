import { LOAD_DATA_CARTS, UPDATE_ITEMS_CARTS } from '../actions'

export const carts = (state = [], action) => {
  switch (action.type) {
      case LOAD_DATA_CARTS: {
          state = [...action.list];
          return state;
      }
      default:
          return state;
  }
};

export const updateCarts = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_ITEMS_CARTS: {
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
