import { AxiosRequestConfig, AxiosResponse } from 'Axios'
import BaseRequest, { requestMethods } from "src/baseRequest";

export interface IGetMixin extends BaseRequest {
    get: (additionalConfig?: AxiosRequestConfig) => Promise<AxiosResponse>
}

const GetMixin = (superclass: typeof BaseRequest): new() => IGetMixin => class extends superclass {
    constructor() {
        super();
    }
    public get(additionalConfig: AxiosRequestConfig = {}) {
        return this.makeRequest(requestMethods.GET, additionalConfig);
    }
};

export default GetMixin;
