import React from 'react';

import Instructions from './Instructions';
import SearchContainer from '../containers/SearchContainer';
import SearchResultContainer from '../containers/SearchResultContainer';
import LikedGifsContainer from '../containers/LikedGifsContainer';
import SliderContainer from '../containers/SliderContainer';


const Calculator = () => {
  
  return (
    <div className="flex calculator">
      <div className="container width-50 full-height-column">
        <Instructions />
        <SearchContainer />
        <SearchResultContainer />
        <SliderContainer />
      </div>
      <LikedGifsContainer />
    </div>
  )
}

export default Calculator;