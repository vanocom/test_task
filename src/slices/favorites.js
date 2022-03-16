import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedPhotosIDs: [],
};

const Favorites = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(loadStorageData.fulfilled, (state, { payload }) => {
    //   loadStorageDataFulfilled(state, payload);
    // });
    // builder.addCase(loadStorageData.rejected, () => {
    // });
    // builder.addCase(changeStorageData.fulfilled, (state, { payload }) => {
    //   changeStorageDataFulfilled(state, payload);
    // });
  }
});

export const selectStorage = (state) => state.favorites;

export default Favorites.reducer;