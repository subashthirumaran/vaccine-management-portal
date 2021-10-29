import { createSlice } from "@reduxjs/toolkit";

export interface UiControlState {
  bookVaccineDialog: boolean;
  addBeneficiaryDialog: boolean;
}

const initialState: UiControlState = {
  bookVaccineDialog: false,
  addBeneficiaryDialog: false,
};

export const uiControlsSlice = createSlice({
  name: "uiControls",
  initialState,
  reducers: {
    setBookVaccineDialog(state, { payload }) {
      state.bookVaccineDialog = payload;
    },
    setAddBeneficiaryDialog(state, { payload }) {
      state.addBeneficiaryDialog = payload;
    },
  },
});

export const { setBookVaccineDialog, setAddBeneficiaryDialog } =
  uiControlsSlice.actions;

export const uiControlsReducer = uiControlsSlice.reducer;
