import { REDIRECT, REDIRECT_CATEGORY,
    REDIRECT_SUB_CATEGORY, REDIRECT_PRODUCTS } from '../types';

// 1: redirect TableUsers
// 2: redirect AddUser
// 3: redirect EditUser
export const redirectFeature = (state = 1, action) => {
  switch (action.type) {
      case REDIRECT: {
          state = action.item;
          return state;
      }
      default:
          return state;
  }
};

// 1: redirect TableCategories, AddCategory
// 2: redirect EditCategory
export const redirectCategory = (state = 1, action) => {
    switch (action.type) {
        case REDIRECT_CATEGORY: {
            state = action.item;
            return state;
        }
        default:
            return state;
    }
};

// 1: redirect TableCategories, AddCategory
// 2: redirect EditCategory
export const redirectSubCategory = (state = 1, action) => {
    switch (action.type) {
        case REDIRECT_SUB_CATEGORY: {
            state = action.item;
            return state;
        }
        default:
            return state;
    }
};

// 1: redirect TableProducts
// 2: redirect AddProduct
// 3: redirect EditProduct
export const redirectProducts = (state = 1, action) => {
    switch (action.type) {
        case REDIRECT_PRODUCTS: {
            state = action.item;
            return state;
        }
        default:
            return state;
    }
};

// 1: redirect TableCarts
// 2: redirect EditCarts
export const redirectCarts = (state = 1, action) => {
    switch (action.type) {
        case REDIRECT_SUB_CATEGORY: {
            state = action.item;
            return state;
        }
        default:
            return state;
    }
};
