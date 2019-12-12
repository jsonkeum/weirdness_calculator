import { connect } from 'react-redux';
import { updateWeirdness, getSearchResults } from '../actions';

import Slider from '../components/Slider'

const mapStateToProps = (state) => ({
  search: state.search,
  weirdness: state.weirdness
});

const mapDispatchToProps = (dispatch) => ({
  getSearchResults: (search, weirdness) => dispatch(getSearchResults({search, weirdness})),
  updateWeirdness: (event) => dispatch(updateWeirdness(parseInt(event.target.value)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Slider);