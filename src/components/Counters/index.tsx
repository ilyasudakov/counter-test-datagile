import { connect, ConnectedProps } from 'react-redux';

import Button from '../Button';
import CounterWithControls from './Counter/CounterWithControls';
import CounterWithInterval from './Counter/CounterWithInterval';

import { RootState } from '../../store';
import { addCounter } from './counterActions';

function Counters({ addCounter, counterList }: CountersProps) {
  return (
    <div>
      <Button onClick={addCounter}>Добавить счетчик</Button>
      <ul className="grid gap-4 mt-4 items-start">
        {Object.entries(counterList).map(([id, data], index) => (
          <li key={data.counterId}>
            {(index + 1) % 4 === 0 ? (
              <CounterWithInterval {...data} />
            ) : (
              <CounterWithControls {...data} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Counters HOC
const connector = connect(
  (state: RootState) => ({ counterList: state.counters }),
  { addCounter }
);
type CountersProps = ConnectedProps<typeof connector>;
export default connector(Counters);
