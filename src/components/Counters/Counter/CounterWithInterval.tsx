import { connect, ConnectedProps } from 'react-redux';

import BasicCounter from './BasicCounter';

import { RootState } from '../../../store';
import { incrementCounter } from '../counterActions';
import { memo, useEffect } from 'react';

const CounterWithInterval = ({
  count,
  counterId,
  incrementCounter,
}: CounterWithIntervalProps) => {
  useEffect(() => {
    const interval = setInterval(() => incrementCounter(counterId), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <BasicCounter count={count} counterId={counterId} />;
};

// Counter with Interval Item HOC
const connector = connect(
  (state: RootState, ownProps: RootState['counters'][string]) => ({
    count: ownProps.count,
    counterId: ownProps.counterId,
  }),
  { incrementCounter }
);
type CounterWithIntervalProps = ConnectedProps<typeof connector>;
export default memo(connector(CounterWithInterval));
