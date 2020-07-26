export const types = {
  COUNTER_INCREMENT: "COUNTER_INCREMENT",
  COUNTER_DECREMENT: "COUNTER_DECREMENT",
};

export const incrementCounter = (amount) => ({
  type: types.COUNTER_INCREMENT,
  payload: amount,
});

export const decrementCounter = (amount) => ({
  type: types.COUNTER_DECREMENT,
  payload: amount,
});
