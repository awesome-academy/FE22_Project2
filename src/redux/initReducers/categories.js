import { LOAD_DATA_CATEGORIES, UPDATE_ITEMS_CATEGORIES } from '../actions';

export const categories = (state = [], action) => {
  switch (action.type) {
      case LOAD_DATA_CATEGORIES: {
          if (action.list) {
              state = [...state, ...action.list];
              return state;
          }
          return state;
      }
      default:
          return state;
  }
};

export const updateCagtegoy = (state = {}, action) => {
  switch (action.type) {
      case UPDATE_ITEMS_CATEGORIES: {
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
