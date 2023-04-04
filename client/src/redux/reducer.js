import * as types from "./actionType"

const initialState={
  lists:[],
  loading: true
}

const listReducer=(state=initialState, action)=>{
  switch (action.type){
    case types.GET_LISTS:
      return {
        ...state,
        lists: action.payload,
        loading: false
      }
      case types.DELETE_LIST:
        return {
          ...state,
          lists: state.lists.filter(i => i.id !== action.payload.index )
        }
    default:
      return state;
  }

}

export default listReducer;