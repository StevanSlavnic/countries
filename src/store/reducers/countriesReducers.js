import * as _ from "lodash";

const setItems = (state, payload) => {
  const stateCopy = _.cloneDeep(state);
  stateCopy.countries = payload.countries;
  return stateCopy;
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "ITEMS_FETCH_DATA_SUCCESS":
      return setItems(state, action);
    default:
      return state;
  }
};

export default reducer;
