import React from 'react';
import utils from './utils.js';

const StarNumbers = (props) => (
  <>
    {' '}
    {utils.range(1, props.stars).map((a) => (
      <div key={a} className="star" />
    ))}{' '}
  </>
);
export default StarNumbers;
