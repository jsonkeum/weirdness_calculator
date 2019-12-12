import { connect } from 'react-redux';
import { removeLikedGif } from '../actions';

import LikedGifs from '../components/LikedGifs'

const mapStateToProps = (state) => ({
  likedGifs: state.likedGifs
});

const mapDispatchToProps = (dispatch) => ({
  removeLikedGif: (gif) => dispatch(removeLikedGif(gif))
})

export default connect(mapStateToProps, mapDispatchToProps)(LikedGifs);