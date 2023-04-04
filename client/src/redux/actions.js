import * as types from "./actionType"
import axios from "axios"

const API_BASE='http://127.0.0.1:3001';

// const getLists=(lists)=>({
//   type: types.GET_LISTS,
//   payload: lists
// })

export const loadList=()=>{
  return async function(dispatch){
    await axios.get(API_BASE+ "/columns").then(({data})=>{
      dispatch({
        type: types.GET_LISTS,
        payload: data.data
    });
}).catch(err => console.log(err));
  }
}

export const deleteList = (index) => {
  return async function(dispatch){
    await axios.delete(API_BASE+ "/columns/"+ index).then(({data})=>{
      dispatch({
        type: types.DELETE_LIST,
         payload: {index}
      });
}).catch(err => console.log(err));
  }

}