import * as _ from "lodash";

const setCountries = (state, payload) => {
  const stateCopy = _.cloneDeep(state);
  stateCopy.countries = payload.countries;
  return stateCopy;
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "COUNTRIES_FETCH_DATA_SUCCESS":
      return setCountries(state, action);
    default:
      console.log("State", state);
      return state;
  }
};

export default reducer;
