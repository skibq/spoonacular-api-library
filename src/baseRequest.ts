import axios, { AxiosRequestConfig, Method, AxiosResponse } from 'Axios';
import merge from 'lodash.merge';
import appConfig from './config'

export enum requestMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

class BaseRequest {
  private readonly basePath: string;
  private readonly basicConfig: AxiosRequestConfig;
  protected endpointPath: string;

  constructor(endpointPath = '/') {
    this.endpointPath = endpointPath;
    this.basePath = appConfig.API_URL;
    this.basicConfig = {
      params: {
        apiKey: appConfig.API_KEY
      }
    }
  }

  private getRequestUrl() {
    return this.basePath + this.endpointPath;
  }

  private extendBasicConfig(additionalConfig: AxiosRequestConfig) {
    return merge({}, this.basicConfig, additionalConfig);
  }

  protected makeRequest(methodType: Method, extraSettings: AxiosRequestConfig): Promise<AxiosResponse> {
    const requestConfig = {
      url: this.getRequestUrl(),
      method: methodType,
      ...extraSettings
    };
    const completeRequestConfig = this.extendBasicConfig(requestConfig);

    return axios.request(completeRequestConfig)
  }
}

export default BaseRequest;
