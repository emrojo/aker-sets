import { combineReducers } from 'redux';
import { reducer as api } from 'redux-json-api';
import selected from './selected.es6';
import browser from './browser.es6';
import materials from './materials.es6';
import collection_ids from './collection_ids.es6';
import token from './token.es6';
import search from './search.es6';

const reducers = combineReducers({
  api,
  selected,
  browser,
  materials,
  collection_ids,
  token,
  search,
});

export default reducers;
