import { LOAD_DATA_ROLE } from '../types';

export const roles = (state = [], action) => {
  switch (action.type) {
      case LOAD_DATA_ROLE: {
          state = [...action.list];
          return state;
      }
      default:
          return state;
  }
};