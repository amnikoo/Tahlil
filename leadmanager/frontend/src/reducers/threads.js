import { ADD_THREAD } from "../actions/types.js";

const initialState = {
  threads: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_THREAD:
      return {
        ...state,
        threads: [...state.threads, action.payload]
      };
    default:
      return state;
  }
}
