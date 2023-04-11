import * as types from "./actionType"
import axios from "axios"

const API_BASE = 'http://127.0.0.1:3001';

export const loadList = () => {
  return async function (dispatch) {
    // await dispatch({
    //   type: types.PREFETCH_LIST
    // });
    await axios.get(API_BASE + "/columns").then(({ data }) => {
      dispatch({
        type: types.GET_LISTS,
        payload: data.data
      });
    }).catch(err => console.log(err));
  }
}

export const deleteList = (id) => {
  return async function (dispatch) {
    await axios.delete(API_BASE + "/columns/" + id).then(({ data }) => {
      dispatch({
        type: types.DELETE_LIST,
        payload: { id }
      });
    }).catch(err => console.log(err));
  }
}

export const createList = (title) => {
  return async function (dispatch) {
    await axios.post(API_BASE + "/columns/", { title })
      .then(({ data }) => {
        dispatch({
          type: types.CREATE_LIST,
          payload: data,
        });
        console.log(data)
      }).catch(err => console.log(err));
  }
}