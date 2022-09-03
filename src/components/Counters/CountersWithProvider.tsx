import { Provider } from 'react-redux';
import Counters from '.';
import store from '../../store';
import '../../index.css';

export default function CountersWithProvider() {
  return (
    <Provider store={store}>
      <Counters />
    </Provider>
  );
}
