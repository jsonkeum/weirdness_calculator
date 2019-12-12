import React from 'react';
import PropTypes from 'prop-types';

import Gif from './Gif'

import { MAX_GIF_COUNT } from '../config'

const LikedGifs = ({ likedGifs, removeLikedGif }) => {
  
  let remainingMessage;
  if (likedGifs.length < MAX_GIF_COUNT) {
    remainingMessage = <p>You must like { MAX_GIF_COUNT - likedGifs.length } more GIF to calculate your score.</p>
  }

  return (
    <div className="container width-50 full-height-column">
      <p><strong>YOUR LIKED GIFS</strong></p>
      <div className="liked-gifs">
        {
          likedGifs.map(gif => (
            <Gif key={gif.search} url={gif.url} title={gif.title} buttonText={'X'} onClick={() => removeLikedGif(gif)} />
          ))
        }
      </div>
      <div className="text-center margin-top">
        <button>
            CALCULATE MY WEIRDNESS SCORE
        </button>
        { remainingMessage }
      </div>
    </div>
  )
}

LikedGifs.propTypes = {
  likedGifs: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
      title: PropTypes.string,
      weirdness: PropTypes.number.isRequired
    })
  ).isRequired,
  removeLikedGif: PropTypes.func.isRequired
}

export default LikedGifs;