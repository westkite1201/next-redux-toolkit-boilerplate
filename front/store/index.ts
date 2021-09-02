import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import board from './board';
import common from './common';

const rootReducer = combineReducers({
  common: common.reducer,
  board: board.reducer,
});

//* 스토어의 타입
export type RootState = ReturnType<typeof rootReducer>;

// let initialRootState: RootState

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    // if (state === initialRootState) {
    // return {
    //   ...state,
    //   ...action.payload
    // };
    // }
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return rootReducer(state, action);
};

//* 타입 지원되는 커스텀 useSelector 만들기
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const store = configureStore({
  reducer,
  devTools: true,
});
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
