import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    deposit: (state, { payload }) => {
      state.value = state.value + payload;
    },
    withdraw: (state, { payload }) => {
      state.value = state.value - payload;
    },
  },
});

export const { deposit, withdraw } = balanceSlice.actions;
export const balanceReducer = balanceSlice.reducer;

// export const balanceReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(depositAction, (state, { payload }) => {
//       state.value = state.value + payload;
//     })
//     .addCase(withdrawAction, (state, { payload }) => {
//       state.value = state.value - payload;
//     });
// });
