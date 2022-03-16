import { createSlice } from '@reduxjs/toolkit';
import { initialDataDownload } from './async_thuks';

const initialState = {
    items: [],
    favoritePhotos: []
};

const Photos = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    changeFavoriteList(state, { payload }) {
        const item = state.items.find(obj => obj.id === payload);
        if (!item) return;
        item.isFavorite = !item.isFavorite;
        state.favoritePhotos = state.items.filter( item => item.isFavorite)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(initialDataDownload.fulfilled, (state, { payload }) => {
        if (!payload) return;
        state.items = payload.photoList.map(item => ({
            ...item,
            isFavorite: state.favoritePhotos.some(favoriteItem => item.id === favoriteItem.id)
        }));

    });
    builder.addCase(initialDataDownload.rejected, () => {
    });
  }
});

export const {
    changeFavoriteList
  } = Photos.actions;

export const selectPhotos = (state) => state.photos;

export default Photos.reducer;
