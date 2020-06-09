import React from 'react';
import { connect } from 'react-redux';
import { incrementX } from '../actions';

const ButtonX = (props) => {
  return (
    <div className="x">
      <button onClick={props.incrementX}>INCREMENT X</button>
    </div>
  );
};

// const mapsStateToProps = (state) => state;
const mapsStateToProps = (state) => {
  return state;
};

export default connect(mapsStateToProps, { incrementX })(ButtonX);
