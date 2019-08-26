import {
  CREATE_COMMENT,
  DELETE_COMMENT
} from '../actions/commentActions';
import { DELETE_POST } from '../actions/postActions';

export const initialState = {
  0: ['', '']
};

export default function commentReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return { ...state, 
        [action.payload.postID]: [...(state[action.payload.postID] || []), action.payload.comment] };
  }
}
