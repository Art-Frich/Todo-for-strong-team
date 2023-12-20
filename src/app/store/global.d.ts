import { TypedUseSelectorHook } from 'react-redux';
import { store } from './store';

type AppDispatch = typeof store.dispatch;

declare global {
  type TRootState = ReturnType<typeof store.getState>;
  type TUseAppDispatch = () => AppDispatch;
  type TUseAppSelector = TypedUseSelectorHook<TRootState>;
}
