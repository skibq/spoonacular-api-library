import { AxiosRequestConfig } from 'axios';

class BaseRequest {
  protected readonly basePath: string;
  protected readonly basicConfig: AxiosRequestConfig;
  protected endpointPath: string;

  constructor() {
    this.endpointPath = '/';
    this.basePath = 'https://api.spoonacular.com'; //todo: move it to .env file
    this.basicConfig = {
      params: {
        apiKey: '2b87b70b0d194cbb9129daaddef330da' //todo: move it to config file or .env
      }
    }
  }
}

export default BaseRequest;
