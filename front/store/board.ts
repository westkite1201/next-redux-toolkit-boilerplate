/* Filter + image 통합 test */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDatas } from 'lib/api/board';
import { BoardState } from 'types';

export const getDatasThunk = createAsyncThunk(
  'board/getPostsListMatchTagThunk',
  // eslint-disable-next-line consistent-return
  async (params, thunkAPI) => {
    try {
      const response = await getDatas();
      const datas = response.data;
      return datas;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const initialState: BoardState = {
  datasNum: 0,
  isDatasLoading: false,
  isDatasDone: false,
  isDatasError: false,
  datas: [],
};

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setDirection(state, action: PayloadAction<number>) {
      state.datasNum = action.payload;
    },
  },
  extraReducers(builder) {
    /*------------------------------------------------------ */
    builder.addCase(getDatasThunk.pending, (state) => {
      state.isDatasDone = false;
      state.isDatasError = null;
      state.datas = [];
    });

    builder.addCase(
      getDatasThunk.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        state.isDatasDone = true;
        state.isDatasError = null;
        state.datas = action.payload;
      },
    );

    builder.addCase(getDatasThunk.rejected, (state, action) => {
      state.isDatasDone = false;
      state.isDatasError = action.error.message;
      state.datas = [];
    });
  },
});
export const boardActions = { ...board.actions };

export default board;
