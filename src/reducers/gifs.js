export const likedGifs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIKED_GIF':
      return [
        // filter out any gifs that have the same search term as the new gif if any, and replace with/add new gif.
        ...state.filter(gif => gif.search !== action.gif.search),
        action.gif
      ]
    case 'REMOVE_LIKED_GIF':
      return state.filter(gif => gif.url !== action.url);
    case 'RESET_LIKED_GIFS':
      return [];    
    default:
      return state;
  }
}