const initialState = {
  username: "Whitney",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, username: "Joseph" };
    default:
      return state;
  }
}

export default rootReducer;
