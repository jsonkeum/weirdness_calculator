import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, weirdness, updateSearchTerm, getSearchResults }) => {

  const onClick = () => {
    getSearchResults(search, weirdness);
  }
  
  return (
    <div>
      <p>Search term</p>
      <div>
        <input type='text' value={search} onChange={updateSearchTerm}/>
        <button onClick={onClick} disabled={!search.length}>SEARCH</button>
      </div>
    </div>
  )
}

Search.propTypes = {
  search: PropTypes.string,
  weirdness: PropTypes.number.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
  getSearchResults: PropTypes.func.isRequired
}

export default Search;