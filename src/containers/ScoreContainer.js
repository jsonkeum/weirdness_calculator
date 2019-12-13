import { connect } from 'react-redux';
import { startOver } from '../actions';

import Score from '../components/Score'

const mapStateToProps = (state) => ({
  likedGifs: state.likedGifs
});

const mapDispatchToProps = (dispatch) => ({
  startOver: () => dispatch(startOver())
})

export default connect(mapStateToProps, mapDispatchToProps)(Score);