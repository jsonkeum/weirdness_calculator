import { connect } from 'react-redux';

import { addLikedGif } from '../actions';

import SearchResult from '../components/SearchResult'

const mapStateToProps = (state) => ({
  searchResult: state.searchResult,
  isLoading: state.toggleLoader,
  likedGifs: state.likedGifs
});

const mapDispatchToProps = (dispatch) => ({
  addLikedGif: (searchResult) => dispatch(addLikedGif(searchResult))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);