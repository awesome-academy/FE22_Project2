import { LOAD_DATA_CARTS } from '../actions'

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