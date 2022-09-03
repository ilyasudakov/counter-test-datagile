import { connect, ConnectedProps } from 'react-redux';

import Button from '../Button';
import CounterWithControls from './Counter/CounterWithControls';
import CounterWithInterval from './Counter/CounterWithInterval';

import { ReactComponent as PlusIcon } from '../../assets/plus.svg';

import { RootState } from '../../store';
import { addCounter } from './counterActions';

const Counters = ({ addCounter, counterList }: CountersProps) => {
  return (
    <div>
      <Button style="default" onClick={addCounter}>
        <PlusIcon width={22} height={22} className="text-blue-500" />
        <span>Добавить счетчик</span>
      </Button>
      <ul className="grid gap-4 mt-4 items-start">
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
};

// Counters HOC
const connector = connect(
  (state: RootState) => ({ counterList: state.counters }),
  { addCounter }
);
type CountersProps = ConnectedProps<typeof connector>;
export default connector(Counters);

const NoItemsBadge = () => {
  return (
    <div
      className="flex items-center gap-2 px-4 py-1 bg-blue-200 
    border border-blue-300 text-blue-900 rounded-md w-fit"
    >
      Нет счетчиков для отображения...
    </div>
  );
};
