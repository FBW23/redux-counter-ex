let initialState = {
  counterX: 0,
  counterY: 0,
};

const clickReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT_X_COUNTER') {
    return Object.assign({}, state, { counterX: state.counterX + 1 });
  }

  if (action.type === 'INCREMENT_Y_COUNTER') {
    return Object.assign({}, state, { counterY: state.counterY + 1 });
  }

  return state;
};

export default clickReducer;
