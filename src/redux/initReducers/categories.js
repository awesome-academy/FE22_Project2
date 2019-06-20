import { LOAD_DATA_CATEGORIES } from '../actions';

export const categories = (state = [], action) => {
  switch (action.type) {
      case LOAD_DATA_CATEGORIES: {
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