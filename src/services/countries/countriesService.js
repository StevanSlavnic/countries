import axiosInstance from "../axiosDefaultInstance";

export const getCountries = () => {
  const url = "/";

  return axiosInstance.get(url);
};

export const getCountry = name => {
  const url = `/name/${name}?fullText=true`;

  return axiosInstance.get(url, name);
};
