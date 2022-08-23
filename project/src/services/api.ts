import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import { BACKEND_URL, REQUEST_TIMEOUT } from '../utils/common';
import { getToken } from './token';
// import { StatusCodes } from 'http-status-codes';
// import { toast } from 'react-toastify';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );
  return api;
};
