export const initialState = {
  language: {
    english: false,
    nepali: false,
  },
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {};

    default:
      return state;
  }
};

export default Reducer;
