export function countriesIsLoading(bool) {
  return {
    type: "COUNTRIES_ARE_LOADING",
    isLoading: bool
  };
}

export function countriesFetchDataSuccess(countries) {
  return {
    type: "COUNTRIES_FETCH_DATA_SUCCESS",
    countries
  };
}

export function countriesFetchData(url) {
  return dispatch => {
    dispatch(countriesIsLoading(true));
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(countriesIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(countries => dispatch(countriesFetchDataSuccess(countries)));
  };
}
