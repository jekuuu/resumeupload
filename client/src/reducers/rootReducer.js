import {
  COVER_LETTER,
  CV,
  EMAIL,
  FIRST_NAME,
  GIT_PROFILE,
  LAST_NAME,
  LIVE_IN_US,
  PHONE_NUMBER,
  RESET,
} from "../AppConstants";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  live_in_us: false,
  git_profile: "",
  cv: "",
  cover_letter: "",
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FIRST_NAME:
      return { ...state, first_name: action.payload };
    case LAST_NAME:
      return { ...state, last_name: action.payload };
    case EMAIL:
      return { ...state, email: action.payload };
    case PHONE_NUMBER:
      return { ...state, phone_number: action.payload };
    case LIVE_IN_US:
      return { ...state, live_in_us: action.payload };
    case GIT_PROFILE:
      return { ...state, git_profile: action.payload };
    case CV:
      return { ...state, cv: action.payload };
    case COVER_LETTER:
      return { ...state, cover_letter: action.payload };
    case RESET:
      return { ...state, ...initialState };

    default:
      return state;
  }
}
