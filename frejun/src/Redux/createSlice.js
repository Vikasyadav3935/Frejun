import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async page => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
  );
  const data = await response.json();
  return data;
});

const DataSlice = createSlice({
  name: 'Data',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      });
  },
});

export default DataSlice.reducer;
