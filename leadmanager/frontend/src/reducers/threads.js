import { ADD_USER } from "../actions/types.js";

const initialState = {
    threads: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_THREAD:
            return {
                ...state,
                users: [...state.threads, action.payload]
            }
        default:
            return state;
    }
}