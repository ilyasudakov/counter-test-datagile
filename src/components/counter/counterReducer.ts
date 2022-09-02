import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import {
  ADD_COUNTER,
  INCREMENT_COUNTER,
  REMOVE_COUNTER,
} from './counterActions';

type counterStateType = {
  count: number;
  counterId: number;
};
type countersListStateType = {
  uuid: number;
  counters: { [id: string]: counterStateType };
};
const initialState: countersListStateType = {
  uuid: 0,
  counters: {},
};

export default function counterReducer(
  state: countersListStateType = initialState,
  action: AnyAction
): countersListStateType {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counters: {
          ...state.counters,
          ...{
            [state.uuid]: { count: 0, counterId: state.uuid },
          },
        },
        uuid: state.uuid + 1,
      };
    case REMOVE_COUNTER: {
      let filteredCounters = Object.assign({}, state.counters);
      delete filteredCounters[action.payload];
      return {
        ...state,
        counters: {
          ...filteredCounters,
        },
      };
    }
    case INCREMENT_COUNTER: {
      return {
        ...state,
        counters: {
          ...state.counters,
          [action.payload]: {
            ...state.counters[action.payload],
            count: state.counters[action.payload].count + 1,
          },
        },
      };
    }
    default:
      return state;
  }
}

export const countersSelector = (state: RootState) => state.counters;
