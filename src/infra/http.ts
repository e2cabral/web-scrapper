import axios, {AxiosInstance} from "axios";

export const httpClient = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL,
  });
}

export enum URL {
  cnnBrasil = 'https://www.cnnbrasil.com.br'
}
