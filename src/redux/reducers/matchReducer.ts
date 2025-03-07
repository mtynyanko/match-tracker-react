import { MatchAction } from "../../types/actions.types";
import { FETCH_MATCHES_FAILURE, FETCH_MATCHES_SUCCESS, MATCHES_REQUEST } from "../../types/constants";
import { IMatchesState } from "../../types/state.types";

const initialState: IMatchesState = {
  matches: [],
  isLoading: false,
  error: null,
}

const matchReducer = (state = initialState, action: MatchAction): IMatchesState => {
  switch (action.type) {
    case MATCHES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_MATCHES_SUCCESS:
      return {
        ...state,
        matches: action.payload,
        isLoading: false,
      };
    case FETCH_MATCHES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  };
};
export default matchReducer;