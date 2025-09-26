import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShowPhotoboxState {
  showPhotobox: boolean;
}

const slice = createSlice({
  name: 'showPhotobox',
  initialState: {
    showPhotobox: true
  } as ShowPhotoboxState,
  reducers: {
    setShowPhotobox: (state, action: PayloadAction<boolean>) => {
      state.showPhotobox = action.payload;
    }
  }
});

export default slice.reducer;

export const { setShowPhotobox: show } = slice.actions;

export type { ShowPhotoboxState };
