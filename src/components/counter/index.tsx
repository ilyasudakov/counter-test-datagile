import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store';
import { addCounter, incrementCounter, removeCounter } from './counterActions';

function Counter({
  addCounter,
  counterList,
  removeCounter,
  incrementCounter,
}: CounterProps) {
  console.log(Object.entries(counterList));

  return (
    <div>
      <button onClick={addCounter}>Добавить счетчик</button>
      <ul>
        {Object.entries(counterList).map(([id, { count, counterId }]) => (
          <li key={counterId}>
            {`#${id}: ${count}`}
            <button onClick={() => incrementCounter(counterId)}>
              Инкрементировать
            </button>
            <button onClick={() => removeCounter(counterId)}>
              Удалить счетчик
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// connect HOC
const connector = connect(
  (state: RootState) => ({
    counterList: state.counters,
  }),
  { addCounter, removeCounter, incrementCounter }
);
type CounterProps = ConnectedProps<typeof connector>;
export default connector(Counter);
