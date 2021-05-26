const initialState = {
  newArray: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "FILL_ARRAY":
      return { ...state, newArray: [{ name: "Joe" }, { name: "Mikael" }] };
    default:
      return state;
  }
}

export default rootReducer;
