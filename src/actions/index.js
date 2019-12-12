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

export const addLikedGif = (gif) => ({
  type: 'ADD_LIKED_GIF',
  gif
})

export const removeLikedGif = (data) => ({
  type: 'REMOVE_LIKED_GIF',
  url: data.url
})

// thunk/API action for getting GIPHY search results
// data should contain 'search' and 'weirdness' from UI/UX
export const getSearchResults = (data) => {

  const requestPath = `${GIPHY_TRANSLATE_API}?api_key=${GIPHY_API_KEY}&s=${data.search}&weirdness=${data.weirdness}`;
  
  // When I tested, the API sends 404 when no matching results are found?
  // Axios will throw an error so this request config should prevent that.
  const requestConfig = {
    validateStatus: status => status === 404 || status === 200
  }

  return (dispatch) => {
    dispatch(toggleLoader());

    return axios.get(requestPath, requestConfig)
    .then(response => {
      if(response.status === 200) {
        dispatch(updateSearchResult({
          url: response.data.data.images.original.url,
          search: data.search,
          title: response.data.data.title.slice(0, response.data.data.title.indexOf(' GIF')),
          weirdness: data.weirdness
        }));
      }

      if(response.status === 404) {
        alert('No matching GIF found! Try a different search term.')
      }

      dispatch(toggleLoader());
    })
    .catch(err => {
      alert('Error retrieving results. Try again in 10 years.')
      dispatch(toggleLoader());
    })

  }
}