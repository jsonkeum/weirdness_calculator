export const search = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_TERM':
      return action.search;
    case 'RESET_SEARCH_TERM':
      return '';
    default:
      return state;
  }
}

export const searchResult = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_RESULT':
      return action.result;
    case 'RESET_SEARCH_RESULT':
      return {}
    default:
      return state;
  }
}

export const weirdness = (state = 0, action) => {
  switch (action.type) {
    case 'UPDATE_WEIRDNESS':
      return action.weirdness;
    case 'RESET_WEIRDNESS':
      return 0;
    default:
      return state;
  }
}
