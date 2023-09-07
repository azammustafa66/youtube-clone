import axios from "axios";
import { BASE_URL } from "./constants";

const options = {
  params: {
    maxResults: "60",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
