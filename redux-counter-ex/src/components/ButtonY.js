import React from 'react';
import { connect } from 'react-redux';
import { incrementY } from '../actions';

const ButtonY = (props) => {
  return (
    <div className="y">
      <button onClick={props.incrementY}>INCREMENT Y</button>
    </div>
  );
};

// const mapsStateToProps = (state) => state;
const mapsStateToProps = (state) => {
  return state;
};

export default connect(mapsStateToProps, { incrementY })(ButtonY);
