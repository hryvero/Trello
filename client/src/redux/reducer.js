import * as types from "./actionType"

const initialState = {
  lists: [],
  loading: false
}

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PREFETCH_LIST:
      return {
        ...state,
        loading: true
      }
    case types.GET_LISTS:
      return {
        ...state,
        lists: action.payload,
        loading: false
      }
    case types.DELETE_LIST:
      return {
        ...state,
        lists: state.lists.filter(({ _id }) => _id !== action.payload.id),
        loading: false
      }
    case types.CREATE_LIST:
      return { ...state, lists: [...state.lists, action.payload] }
    default:
      return state;
  }

}

export default listReducer;