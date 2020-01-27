import { ADD_THREAD, GET_THREADS, DELETE_THREAD } from "../actions/types.js";

const initialState = {
  threads: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_THREADS:
      return {
        ...state,
        threads: action.payload
      };
    case DELETE_THREAD:
      return {
        ...state,
        threads: state.threads.filter(thread => thread.id !== action.payload)
      };
    case ADD_THREAD:
      return {
        ...state,
        threads: [...state.threads, action.payload]
      };
    default:
      return state;
  }
}
