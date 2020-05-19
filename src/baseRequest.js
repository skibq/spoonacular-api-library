import axios from 'axios';

class BaseRequest {
  constructor() {
    this.endpointPath = '/';
    this.basePath = 'https://api.spoonacular.com'; //todo: move it to .env file
    this.basicConfig = {
      params: {
        apiKey: '2b87b70b0d194cbb9129daaddef330da' //todo: move it to config file or .env
      }
    }
  }

  get() {
    const requestUrl = this.basePath + this.endpointPath;
    return axios.get(requestUrl, this.basicConfig);
  }

  post() {
    const requestUrl = this.basePath + this.endpointPath;
    return axios.post(requestUrl, this.basicConfig)
  }
}

export default BaseRequest;
