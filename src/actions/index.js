import axios from 'axios';
import { GIPHY_API_KEY, GIPHY_TRANSLATE_API } from '../config';

export const updateSearchTerm = (search) => ({
  type: 'UPDATE_SEARCH_TERM',
  search
})

export const updateSearchResult = (result) => ({
  type: 'UPDATE_SEARCH_RESULT',
  result
})

export const updateWeirdness = (weirdness) => ({
  type: 'UPDATE_WEIRDNESS',
  weirdness
})

export const toggleLoader = () => ({
  type: 'TOGGLE_LOADER'
})