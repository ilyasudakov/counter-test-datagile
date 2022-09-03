import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../store';
import { removeCounter } from '../counterActions';

import Button from '../../Button';

function BasicCounter({
  counterId,
  count,
  removeCounter,
  leftSideControls,
  rightSideControls,
  controlPanel,
}: BasicCounterProps) {
  return (
    <div className="bg-stone-100 flex gap-4 rounded-md px-4 py-2 w-fit relative pl-[2rem]">
      <div className="text-sm text-stone-400 absolute top-[5px] left-[8px]">{`#${counterId}`}</div>
      {leftSideControls}
      <div className="text-3xl">{count}</div>
      {rightSideControls}
      <Button
        className="ml-6 bg-red-100 text-red-400"
        onClick={() => removeCounter(counterId)}
      >
        Удалить
      </Button>
      {controlPanel}
    </div>
  );
}

type OwnPropsType = RootState['counters'][string] & {
  leftSideControls?: React.ReactNode;
  rightSideControls?: React.ReactNode;
  controlPanel?: React.ReactNode;
};
const mapStateToProps = (state: RootState, ownProps: OwnPropsType) => ({
  count: ownProps.count,
  counterId: ownProps.counterId,
  leftSideControls: ownProps.leftSideControls,
  rightSideControls: ownProps.rightSideControls,
  controlPanel: ownProps.controlPanel,
});

// Counter Item HOC
const connectorCounter = connect(mapStateToProps, { removeCounter });
type BasicCounterProps = ConnectedProps<typeof connectorCounter>;
export default connectorCounter(BasicCounter);
