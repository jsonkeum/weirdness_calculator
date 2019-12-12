import { connect } from 'react-redux';

import { likeNewGif } from '../actions';

import SearchResult from '../components/SearchResult'

const mapStateToProps = (state) => ({
  searchResult: state.searchResult,
  isLoading: state.toggleLoader,
  likedGifs: state.likedGifs
});

const mapDispatchToProps = (dispatch) => ({
  likeNewGif: (searchResult) => dispatch(likeNewGif(searchResult))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);