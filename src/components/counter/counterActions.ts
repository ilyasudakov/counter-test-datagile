export const ADD_COUNTER = 'counter/add_counter';
export const REMOVE_COUNTER = 'counter/remove_counter';
export const INCREMENT_COUNTER = 'counter/increment';
export const DECREMENT_COUNTER = 'counter/decrement';

export const addCounter = () => ({
  type: ADD_COUNTER,
});
export const removeCounter = (id: number) => ({
  type: REMOVE_COUNTER,
  payload: id,
});
export const incrementCounter = (id: number) => ({
  type: INCREMENT_COUNTER,
  payload: id,
});
export const decrementCounter = (id: number) => ({
  type: DECREMENT_COUNTER,
  payload: id,
});
