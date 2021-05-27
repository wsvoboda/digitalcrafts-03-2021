import {
  INSERT_FAKE_JOE,
  ADD_GOVT_OFFICIAL,
  REMOVE_ELON,
} from "../action-types/action-types";

const initialState = {
  fakeData: [],
  governmentOfficials: ["Mayor", "Governer", "Secretary of Treasury"],
  celebrities: [
    { name: "Elon Musk" },
    { name: "Sam Elliot" },
    { name: "Mark Zucky" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_FAKE_JOE:
      return { ...state, fakeData: [{ name: "Whitney", location: "Dallas" }] };
    case ADD_GOVT_OFFICIAL:
      return {
        ...state,
        governmentOfficials: [...state.governmentOfficials, "Senator"],
      };
    case REMOVE_ELON:
      const newCelebs = state.celebrities.filter(
        (celeb) => celeb.name !== "Elon Musk"
      );
      return { ...state, celebrities: newCelebs };
    default:
      return state;
  }
};

export default reducer;
