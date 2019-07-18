import axiosInstance from "../axiosDefaultInstance";

export const getCountries = () => {
  const url = "/all";

  return axiosInstance.get(url);
};

export const getCountry = name => {
  const url = `/name/${name}`;

  return axiosInstance.get(url, name);
};
