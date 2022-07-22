import axios, { AxiosResponse } from "axios";
import { Post } from "../models/post";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5130/api";
axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000);
    return response;
  } catch (err) {
    console.log(err);
    return Promise.reject;
  }
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete(url).then(responseBody),
};

const Posts = {
  list: () => requests.get<Post[]>("/posts"),
};

const agent = {
  Posts,
};

export default agent;
