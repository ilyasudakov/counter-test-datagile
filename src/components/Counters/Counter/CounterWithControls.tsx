import { connect, ConnectedProps } from 'react-redux';

import Button from '../../Button';
import BasicCounter from './BasicCounter';

import { RootState } from '../../../store';
import { incrementCounter, decrementCounter } from '../counterActions';

import { ReactComponent as PlusIcon } from '../../../assets/plus.svg';
import { ReactComponent as MinusIcon } from '../../../assets/minus.svg';

const buttonClassses = `rounded-[25px] bg-inherit text-2xl px-0 py-0`;

const CounterWithControls = ({
  count,
  counterId,
  incrementCounter,
  decrementCounter,
}: CounterProps) => {
  return (
    <BasicCounter
      count={count}
      counterId={counterId}
      leftSideControls={
        <Button
          className={buttonClassses}
          onClick={() => incrementCounter(counterId)}
        >
          <PlusIcon className="text-blue-500" />
        </Button>
      }
      rightSideControls={
        <Button
          className={buttonClassses}
          onClick={() => decrementCounter(counterId)}
        >
          <MinusIcon />
        </Button>
      }
    />
  );
};

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
