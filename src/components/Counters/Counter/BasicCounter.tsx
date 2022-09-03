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
    <div className="flex items-center gap-2">
      <div className="bg-stone-100 flex gap-4 rounded-md px-4 py-2 w-fit relative">
        {leftSideControls}
        <div className="flex items-center text-xl border rounded-md px-4 py-1 bg-white">
          {count}
        </div>
        {rightSideControls}
      </div>
      <div className="flex">
        <Button
          className="bg-red-100 text-red-700 text-sm"
          onClick={() => removeCounter(counterId)}
        >
          Удалить
        </Button>
        {controlPanel}
      </div>
      <div
        className="text-sm bg-indigo-100 rounded-[25px] px-2 
      text-indigo-700"
      >{`ID: ${counterId}`}</div>
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
