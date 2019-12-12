import { connect } from 'react-redux';

import { getSearchResults, updateSearchTerm } from '../actions';

import Search from '../components/Search';

const mapStateToProps = (state) => ({
  search: state.search,
  weirdness: state.weirdness
});

const mapDispatchToProps = (dispatch) => ({
  updateSearchTerm: (event) => dispatch(updateSearchTerm(event.target.value)), 
  getSearchResults: (search, weirdness) => dispatch(getSearchResults({search, weirdness}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);