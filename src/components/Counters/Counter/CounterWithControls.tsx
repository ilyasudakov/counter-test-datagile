import { connect, ConnectedProps } from 'react-redux';

import Button from '../../Button';
import BasicCounter from './BasicCounter';

import { RootState } from '../../../store';
import { incrementCounter, decrementCounter } from '../counterActions';

function CounterWithControls({
  count,
  counterId,
  incrementCounter,
  decrementCounter,
}: CounterProps) {
  return (
    <BasicCounter
      count={count}
      counterId={counterId}
      leftSideControls={
        <Button
          className="rounded-[25px]"
          onClick={() => incrementCounter(counterId)}
        >
          +
        </Button>
      }
      rightSideControls={
        <Button
          className="rounded-[25px]"
          onClick={() => decrementCounter(counterId)}
        >
          -
        </Button>
      }
    />
  );
}

// Counter Item HOC
const connector = connect(
  (state: RootState, ownProps: RootState['counters'][string]) => ({
    count: ownProps.count,
    counterId: ownProps.counterId,
  }),
  { incrementCounter, decrementCounter }
);
type CounterProps = ConnectedProps<typeof connector>;
export default connector(CounterWithControls);
