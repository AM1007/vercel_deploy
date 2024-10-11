const initialState = { value: 0 };

export const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "balance/withdraW":
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};
