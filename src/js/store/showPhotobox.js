import { createSlice } from '@reduxjs/toolkit';

// Slice
const slice = createSlice({
  name: 'showPhotobox',
  initialState: {
    showPhotobox: true
  },
  reducers: {
    showPhotobox: (state, action) => {
      state.showPhotobox = action.payload;
    }
  }
});
export default slice.reducer;

// Actions
const { showPhotobox } = slice.actions;
/**
 *
 * @param {Boolean} state State of the photobox to set
 */
export const show = (state) => (dispatch) => {
  try {
    dispatch(showPhotobox(state));
  } catch (e) {
    // eslint-disable-next-line no-console
    return console.error(e.message);
  }
};
