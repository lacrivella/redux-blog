import { createStore } from 'redux';
import postReducer from './reducers/postReducer';

export default createStore(
  postReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
