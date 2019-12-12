export const search = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_TERM':
      return action.search;
    default:
      return state;
  }
}

export const searchResult = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_RESULT':
      return action.result;
    default:
      return state;
  }
}

export const weirdness = (state = 0, action) => {
  switch (action.type) {
    case 'UPDATE_WEIRDNESS':
      return action.weirdness;
    default:
      return state;
  }
}
