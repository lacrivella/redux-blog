import {
  CREATE_COMMENT,
  DELETE_COMMENT
} from '../actions/commentActions';
import { DELETE_POST } from '../actions/postActions';

export const initialState = { };

export default function commentReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT: 
      return { ...state, 
        [action.payload.postID]:
          [...(state[action.payload.postID] || []), action.payload.comment] };
    case DELETE_COMMENT:
      return { ...state,
        [action.payload.postID]:
          [...state[action.payload.postID].slice(0, action.payload.commentID),
            ...state[action.payload.postID].slice(action.payload.commentID + 1)] };
    case DELETE_POST: {
      const index = action.payload;
      const newState = { ...state };
      delete newState[index];
      return newState;
    }
    default: return state;
  }
}

//you cant spread an undefined array, hence the or empty on ln 14