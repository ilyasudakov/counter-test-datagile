import { RootState } from '../../store';
import { CounterAction, CounterEmptyAction, ACTIONS } from './counterActions';

type counterStateType = {
  count: number;
  counterId: number;
};
type countersListStateType = {
  uuid: number;
  counters: { [id: string]: counterStateType };
};
const initialState: countersListStateType = {
  uuid: 1,
  counters: {},
};

export default function counterReducer(
  state: countersListStateType = initialState,
  action: CounterAction | CounterEmptyAction
): countersListStateType {
  switch (action.type) {
    case ACTIONS.ADD_COUNTER: {
      const prevCountersSum = Object.entries(state.counters).reduce(
        (sum, [_, counter]) => sum + counter.count,
        0
      );
      return {
        ...state,
        counters: {
          ...state.counters,
          [state.uuid]: { count: prevCountersSum, counterId: state.uuid },
        },
        uuid: state.uuid + 1,
      };
    }
    case ACTIONS.REMOVE_COUNTER: {
      let filteredCounters = Object.assign({}, state.counters);
      delete filteredCounters[action.payload.id];
      return {
        ...state,
        counters: {
          ...filteredCounters,
        },
      };
    }
    case ACTIONS.INCREMENT_COUNTER: {
      return {
        ...state,
        counters: {
          ...state.counters,
          [action.payload.id]: {
            ...state.counters[action.payload.id],
            count: state.counters[action.payload.id].count + 1,
          },
        },
      };
    }
    case ACTIONS.DECREMENT_COUNTER: {
      return {
        ...state,
        counters: {
          ...state.counters,
          [action.payload.id]: {
            ...state.counters[action.payload.id],
            count: state.counters[action.payload.id].count - 1,
          },
        },
      };
    }
    default:
      return state;
  }
}

export const countersSelector = (state: RootState) => state.counters;
