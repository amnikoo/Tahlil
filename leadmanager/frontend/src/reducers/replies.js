import { ADD_REPLY, GET_REPLIES, DELETE_REPLY } from "../actions/types.js";

const initialState = {
  replies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_REPLIES:
      return {
        ...state,
        replies: action.payload
      };
    case DELETE_REPLY:
      return {
        ...state,
        replies: state.replies.filter(reply => reply.id !== action.payload)
      };
    case ADD_REPLY:
      return {
        ...state,
        replies: [...state.replies, action.payload]
      };
    default:
      return state;
  }
}
