import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store';
import Button from '../Button';
import {
  addCounter,
  incrementCounter,
  removeCounter,
  decrementCounter,
} from './counterActions';

function Counters({ addCounter, counterList }: CountersProps) {
  return (
    <div>
      <Button onClick={addCounter}>Добавить счетчик</Button>
      <ul className="grid gap-4 mt-4 items-start">
        {Object.entries(counterList).map(([id, data]) => (
          <li key={data.counterId}>
            <ConnectedCounter {...data} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// Counters HOC
const connector = connect(
  (state: RootState) => ({ counterList: state.counters }),
  { addCounter, removeCounter, incrementCounter, decrementCounter }
);
type CountersProps = ConnectedProps<typeof connector>;
export default connector(Counters);

function Counter({
  count,
  counterId,
  incrementCounter,
  decrementCounter,
  removeCounter,
}: CounterProps) {
  return (
    <div className="bg-stone-100 flex gap-4 rounded-md px-4 py-2 w-fit relative pl-[2rem]">
      <div className="text-sm text-stone-400 absolute top-[5px] left-[8px]">{`#${counterId}`}</div>
      <Button
        className="rounded-[25px]"
        onClick={() => incrementCounter(counterId)}
      >
        +
      </Button>
      <div className="text-3xl">{count}</div>
      <Button
        className="rounded-[25px]"
        onClick={() => decrementCounter(counterId)}
      >
        -
      </Button>
      <Button className="ml-6" onClick={() => removeCounter(counterId)}>
        Удалить
      </Button>
    </div>
  );
}

// Counter Item HOC
const connectorCounter = connect(
  (state: RootState, ownProps: CountersProps['counterList'][string]) => ({
    count: ownProps.count,
    counterId: ownProps.counterId,
  }),
  { addCounter, removeCounter, incrementCounter, decrementCounter }
);
type CounterProps = ConnectedProps<typeof connectorCounter>;
const ConnectedCounter = connectorCounter(Counter);
