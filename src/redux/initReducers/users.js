import { LOAD_DATA_USERS } from '../actions';

export const users = (state = [], action) => {
  switch (action.type) {
      case LOAD_DATA_USERS: {
          if (action.list) state = [...action.list];
          return state;
      }
      default:
          return state;
  }
};