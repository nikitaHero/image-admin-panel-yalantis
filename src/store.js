import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import addImageReducer from "components/Form/ducks";
import gridPageReducer from "components/ImageGrid/ducks";

import { reducer as toastr } from "react-redux-toastr";

//create root reducer

const rootReducer = combineReducers({
  addImage: addImageReducer,
  gridPage: gridPageReducer,
  toastr,
});

//create store

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
