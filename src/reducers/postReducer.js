import {
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST
} from '../actions/postActions';

export const initialState = {
  post: []
};

export default function postReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return { ...state, post:[...state.post, action.payload] };
    case DELETE_POST:
      return { ...state, post: [...state.post.slice(0, action.payload),  ...state.post.slice(action.payload + 1)] };
    // case UPDATE_POST:
    //   return {...state}
    default:
      return state;
  }
};