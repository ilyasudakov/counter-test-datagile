import { Provider } from 'react-redux';
import Counters from '.';
import store from '../../store';

export default function CountersWithProvider() {
  return (
    <Provider store={store}>
      <Counters />
    </Provider>
  );
}
