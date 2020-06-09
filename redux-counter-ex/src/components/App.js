import React from 'react';
import '../sass/App.scss';
import { connect } from 'react-redux';
import ButtonX from './ButtonX';
import ButtonY from './ButtonY';

const App = (props) => {
  let { counterX, counterY } = props;

  return (
    <div className="App">
      <p>The x is {counterX}</p>
      <p>The y is {counterY}</p>
      <ButtonX></ButtonX>
      <ButtonY></ButtonY>
    </div>
  );
};

// const mapsStateToProps = (state) => state;
const mapsStateToProps = (state) => {
  return state;
};

export default connect(mapsStateToProps)(App);
