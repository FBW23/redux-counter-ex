export const incrementX = (payload) => {
  return {
    type: 'INCREMENT_X_COUNTER',
    payload,
  };
};

export const incrementY = (payload) => {
  return {
    type: 'INCREMENT_Y_COUNTER',
    payload,
  };
};
