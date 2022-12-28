import { createSlice } from '@reduxjs/toolkit';


interface  ModalState {
  isCartOpen: boolean;
}

const initialState: ModalState = {
  isCartOpen: false,
};

const modalSlice = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    toggleCartModal: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { toggleCartModal } =
  modalSlice.actions;

export default modalSlice.reducer;