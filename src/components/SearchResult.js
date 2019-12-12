import React from 'react';
import PropTypes from 'prop-types';

import Loader from './Loader';

import { MAX_GIF_COUNT } from '../config';

const SearchResult = ({ searchResult, isLoading, likedGifs, likeNewGif }) => {
  const onClick = () => {
    if (likedGifs.length < MAX_GIF_COUNT || likedGifs.filter(gif => gif.search === searchResult.search).length) {
      likeNewGif(searchResult);
    }
  }

  const helpMessage = likedGifs.length < 5 ? 'Enter any word or phrase and click search.' : `You've added ${MAX_GIF_COUNT} Gifs!`;

  if (isLoading) {
    return <Loader />
  }

  if (searchResult.url) {
    return (
      <div>
        <p><strong>YOUR RESULT</strong></p>
        <div className="flex flex-v-center">
          <p>{searchResult.title}</p>
          <img className="search-result" src={searchResult.url} alt={searchResult.title}/>
          <button className="margin-top" onClick={onClick} disabled={!searchResult.url}>LIKE</button>
        </div>
      </div>
    )
  }

  return (
    <div className="text-center">
      <p><strong>{helpMessage}</strong></p>
    </div>
  )
}

SearchResult.propTypes = {
  searchResult: PropTypes.shape({
    url: PropTypes.string,
    search: PropTypes.string,
    title: PropTypes.string,
    weirdness: PropTypes.number
  }),
  isLoading: PropTypes.bool.isRequired,
  likedGifs: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
      title: PropTypes.string,
      weirdness: PropTypes.number.isRequired
    })
  ).isRequired,
  likeNewGif: PropTypes.func.isRequired
}

export default SearchResult;