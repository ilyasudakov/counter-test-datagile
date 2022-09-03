import { useAutoAnimate } from '@formkit/auto-animate/react';
import { connect, ConnectedProps } from 'react-redux';

import Button from '../Button';
import CounterWithControls from './Counter/CounterWithControls';
import CounterWithInterval from './Counter/CounterWithInterval';

import { RootState } from '../../store';
import { addCounter } from './counterActions';

function Counters({ addCounter, counterList }: CountersProps) {
  const [parent] = useAutoAnimate<HTMLUListElement>();
  return (
    <div>
      <Button onClick={addCounter}>Добавить счетчик</Button>
      <ul ref={parent} className="grid gap-4 mt-4 items-start">
        {Object.keys(counterList).length === 0 && <NoItemsBadge />}
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

const NoItemsBadge = () => {
  return (
    <div className="flex items-center gap-2 px-4 py-1 bg-blue-100 text-blue-700 rounded-md w-fit">
      <div className="flex items-center justify-center bg-blue-300 text-blue-800 w-5 h-5 rounded-[25px]">
        i
      </div>
      <div>Нет счетчиков для отображения...</div>
    </div>
  );
};
