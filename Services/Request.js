import axios from "axios";
import { ApiBaseUrl } from "./Config";

export const client = axios.create({
  baseURL: ApiBaseUrl,
});

async function REQUEST(options) {
  const onSuccess = function (response) {
    return response.data;
  };
  const onError = function (error) {
    console.error(error);

    if (error.response) {
      if (error.response.status === 401) {
        window.href = "/login";
      }
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  };

  return client({
    ...options,
    headers: {
      ...axios.defaults.headers,
      Authorization: "Bearer " + options.token,
    },
  })
    .then(onSuccess)
    .catch(onError);
}

export default REQUEST;
