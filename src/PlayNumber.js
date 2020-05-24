import React from 'react';

function PlayNumber(props) {
  return (
    <button
      className="number"
      style={{
        backgroundColor: colors[props.status],
      }}
      onClick={() => {
        props.onClick(props.number, props.status);
      }}
    >
      {props.number}{' '}
    </button>
  );
}

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

export default PlayNumber;
