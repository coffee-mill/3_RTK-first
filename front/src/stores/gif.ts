import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import gifApi from '../api/gif';
import Gif from '../types';
import { AppDispatch } from './index';

const initialState: Gif = {
  url: '',
  loading: false,
  error: false,
};

const slice = createSlice({
  name: 'gif',
  initialState,
  reducers: {
    fetchStart: (state) => {
      return Object.assign({}, state, { url: '', loading: true });
    },
    fetchSucceed: (state, action: PayloadAction<Gif>) => {
      return Object.assign({}, state, { url: action.payload, loading: false });
    },
    fetchFaild: (state, action: any) => {
      console.error(action.payload);
      return Object.assign({}, state, { loading: false, error: true });
    },
    clear: () => {
      return { url: '', loading: false, error: false };
    },
  },
});

export default slice.reducer;

export const { clear } = slice.actions;

export function fetchAsync() {
  return async function (dispatch: AppDispatch) {
    dispatch(slice.actions.fetchStart());

    try {
      const response = await gifApi.random();
      dispatch(slice.actions.fetchSucceed(response.url));
    } catch (err) {
      dispatch(slice.actions.fetchFaild(err));
    }
  };
}
