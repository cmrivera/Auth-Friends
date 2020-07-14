import axios from "axios";

export const axiosWithAuth = () => {
  //const token to set to localStorage getITem to recieve token
  const token = localStorage.getItem("token");

  //create axios api call to api server

  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: token,
    },
  });
};
