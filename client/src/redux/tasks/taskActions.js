import * as types from "./taskType"
import axios from "axios"

const API_BASE = 'http://127.0.0.1:3001';

export const loadTask = () => {
  return async function (dispatch) {
    await axios.get(API_BASE + "/tasks/").then(({ data }) => {
      dispatch({
        type: types.GET_TASKS,
        payload: data.data
      });
    }).catch(err => console.log(err));
  }
}

export const deleteTask = (id) => {
  return async function (dispatch) {
    await axios.delete(API_BASE + "/tasks/" + id).then(({ data }) =>()=> {
      dispatch({
        type: types.DELETE_TASK,
        payload: { id }
      });
    }).catch(err => console.log(err));
  }
}

export const createTask = ({title, column}) => {
  return async function (dispatch) {
    await axios.post(API_BASE + "/tasks/", { title, column })
      .then(({ data }) => {
        dispatch({
          type: types.CREATE_TASK,
          payload: data,
        });
        console.log(data)
      }).catch(err => console.log(err));
  }
}