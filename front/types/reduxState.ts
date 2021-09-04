import {} from '.';

//* 공통 redux state
export interface CommonState {
  validateMode: boolean;
}

export type DataState = {
  datasNum: number;
  isDatasLoading: boolean;
  isDatasDone: boolean;
  isDatasError: any;
  datas: any[];
};
