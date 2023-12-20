import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from '../store/store';

export type TRootState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;
type TUseAppDispatch = () => TAppDispatch;
type TUseAppSelector = TypedUseSelectorHook<TRootState>;

export const useAppDispatch: TUseAppDispatch = useDispatch;
export const useAppSelector: TUseAppSelector = useSelector;
