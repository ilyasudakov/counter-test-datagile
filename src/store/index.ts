import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/Counters/counterReducer';

const store = configureStore({
  reducer: counterReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
