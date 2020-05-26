import { AxiosRequestConfig, AxiosResponse } from 'Axios'
import BaseRequest, { requestMethods } from "../baseRequest";

class GetMixin extends BaseRequest {
    public get(additionalConfig: AxiosRequestConfig = {}): Promise<AxiosResponse> {
        return this.makeRequest(requestMethods.GET, additionalConfig);
    }
}

export default GetMixin;
