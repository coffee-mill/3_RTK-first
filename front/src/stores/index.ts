import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import gifReducer from './gif';
import { useDispatch } from 'react-redux';

const reducer = combineReducers({
  gif: gifReducer,
});

const store = configureStore({ reducer });

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
