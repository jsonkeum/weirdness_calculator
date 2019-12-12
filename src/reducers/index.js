import { combineReducers } from 'redux';

import { search, searchResult, weirdness } from './search';
import { likedGifs } from './gifs';

const toggleLoader = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADER': 
      return !state;
    default:
      return state;
  }
}

export default combineReducers({
  toggleLoader,
  search,
  searchResult,
  weirdness,
  likedGifs
})