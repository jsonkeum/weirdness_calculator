import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// I'm using debounce here to prevent the weirdness state change from calling the API too many times.
import _ from 'lodash'

// We need the search and weirdness states so that we can call the API using getSearchResults when the user drags the slider.
const Slider = ({ search, weirdness, getSearchResults, updateWeirdness }) => {
  
  // Memoizing the debounce callback function for faster performance
  const getNewResults = () => {
    if(search.length) {
      getSearchResults(search, weirdness);
    }
  }

  const debounced = _.debounce(getNewResults, 500);

  // Memoizing the useEffect callback
  const getDebouncedNewResult = () => {
    debounced();
    return debounced.cancel;
  }

  // connect the effects hook to the weirdness state
  useEffect(getDebouncedNewResult, [weirdness])
  
  return (
    <div>
      <div className="margin-top">
        <input
          className="max-width"
          type='range'
          max='10'
          value={weirdness}
          onChange={updateWeirdness}/>
      </div>
      <p>Weirdness: {weirdness}</p>
    </div>
  )
}

Slider.propTypes = {
  search: PropTypes.string.isRequired,
  weirdness: PropTypes.number.isRequired,
  updateWeirdness: PropTypes.func.isRequired,
  getSearchResults: PropTypes.func.isRequired
}

export default Slider;