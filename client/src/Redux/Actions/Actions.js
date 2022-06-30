import api from "../../Functions/api";
import { SET_PRODUCTS, SET_LOADING, SET_SELECTED_PRODUCT, SET_CATEGORIES, SET_SELECTED_CATEGORY } from "./Types";

export const getProducts = (url, params) => async dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: true,
  });
  
  const res = await api(url, "GET", params);

  if (res && res.status === 200) {
    dispatch({
      type: SET_PRODUCTS,
      payload: res.data,
    });
  }

  dispatch({
    type: SET_LOADING,
    payload: false,
  });
};

export const getCategories = url => async dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: true,
  });
  const res = await api(url, "GET");

  if (res && res.status === 200) {
    dispatch({
      type: SET_CATEGORIES,
      payload: res.data,
    });
  }

  dispatch({
    type: SET_LOADING,
    payload: false,
  });
};

export const setProduct = data => dispatch => {
  dispatch({
    type: SET_SELECTED_PRODUCT,
    payload: data,
  });
};

export const setSelectedCategory = data => dispatch => {
  dispatch({
    type: SET_SELECTED_CATEGORY,
    payload: data,
  });
};
