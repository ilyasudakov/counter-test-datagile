export const ACTIONS = {
  ADD_COUNTER: 'counter/add_counter',
  REMOVE_COUNTER: 'counter/remove_counter',
  INCREMENT_COUNTER: 'counter/increment',
  DECREMENT_COUNTER: 'counter/decrement',
} as const;

export type CounterEmptyAction = { type: typeof ACTIONS.ADD_COUNTER };
export type CounterAction = {
  type: typeof ACTIONS[keyof typeof ACTIONS];
  payload: { id: number };
};

export const addCounter = (): CounterEmptyAction => ({
  type: ACTIONS.ADD_COUNTER,
});
export const removeCounter = (id: number): CounterAction => ({
  type: ACTIONS.REMOVE_COUNTER,
  payload: { id },
});
export const incrementCounter = (id: number): CounterAction => ({
  type: ACTIONS.INCREMENT_COUNTER,
  payload: { id },
});
export const decrementCounter = (id: number): CounterAction => ({
  type: ACTIONS.DECREMENT_COUNTER,
  payload: { id },
});
