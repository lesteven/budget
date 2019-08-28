import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import thunk from 'redux-thunk';
import { data } from './data';

const reducers = combineReducers({
  data
});

const configureStore = () => {
  return createStore(
    reducers,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
  )
}

export default configureStore;
