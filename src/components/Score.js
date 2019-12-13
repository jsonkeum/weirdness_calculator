import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Gif from './Gif.js';

import { MAX_GIF_COUNT } from '../config';

const Score = ({ likedGifs, startOver }) => {
  // If user tries to go to '/results' manually, it will redirect to / main page if there are less than 5 gifs.
  if(likedGifs.length < MAX_GIF_COUNT) {
    return <Redirect to='/' />
  }

  const score = Math.round(likedGifs.reduce((acc, curr) => curr.weirdness + acc, 0) / likedGifs.length);

  return (
    <div className="container score full-height-column">
      <h4 className="text-center">You scored { score } out of 10 on the weirdness scale!</h4>
      <p>The GIFs you liked</p>
      <div className="liked-gifs">
        {
          likedGifs.map(gif => (
            <div key={gif.search} className="gif-wrapper-score full-height-column">
              <Gif key={gif.search} url={gif.url} title={gif.title} />
              <p className="text-center"><strong>{gif.weirdness}/10</strong></p>
            </div>
          ))
        }
      </div>
      <div className="text-center margin-top">
        <button onClick={startOver}>START OVER</button>
      </div>
    </div>
  )
}

Score.propTypes = {
  likedGifs: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
      title: PropTypes.string,
      weirdness: PropTypes.number.isRequired
    })
  ).isRequired,
  startOver: PropTypes.func.isRequired
}

export default Score;