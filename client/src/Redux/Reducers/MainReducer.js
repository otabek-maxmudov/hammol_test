import { SET_SELECTED_PRODUCT, SET_PRODUCTS, SET_CATEGORIES, SET_SELECTED_CATEGORY } from "../Actions/Types";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  categories: [],
  productsList: [],
  selectedProduct: {},
  selectedCategory: "",
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        productsList: action.payload,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};
