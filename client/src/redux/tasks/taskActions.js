import * as types from "./taskType"
import axios from "axios"

const API_BASE = 'https://trello-boards.onrender.com';

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
    await axios.delete(API_BASE + "/tasks/" + id).then(({ data }) => {
      dispatch({
        type: types.DELETE_TASK,
        payload: { id }
      });
    }).catch(err => console.log(err));
  }
}

export const updateTask = (id, newTitle) => {
  return async function (dispatch) {
    await axios.put(API_BASE + "/tasks/" + id, {title: newTitle}).then((res) => {
      dispatch({
        type: types.UPDATE_TASK,
        payload: res.data
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