import { LOAD_DATA_USERS, UPDATE_ITEMS_USERS } from '../actions';

export const users = (state = [], action) => {
  switch (action.type) {
      case LOAD_DATA_USERS: {
          if (action.list) state = [...state, ...action.list];
          return state;
      }
      default:
          return state;
  }
};

export const usersUpdate = (state = {}, action) => {
  switch (action.type) {
      case UPDATE_ITEMS_USERS: {
          state = {...state, ...action.item};
          return state;
      }
      default:
          return state;
  }
};
