import * as types from "./taskType"

const initialState = {
  tasks: [],
  loading: false
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_TASK:
          return {
            ...state,
            tasks: state.tasks.map(
              item=> item._id===action.payload.id
              ? action.payload
              : item
            )
          }
    case types.GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false
      }
    case types.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(({ _id }) => _id !== action.payload.id),
        loading: false
      }
    case types.CREATE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] }
    default:
      return state;
  }

}

export default taskReducer;