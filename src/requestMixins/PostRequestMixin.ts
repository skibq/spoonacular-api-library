import { AxiosRequestConfig, AxiosResponse } from 'Axios'
import BaseRequest, { requestMethods } from "../baseRequest";

class PostMixin extends BaseRequest {
    public post(additionalConfig: AxiosRequestConfig = {}): Promise<AxiosResponse> {
        return this.makeRequest(requestMethods.POST, additionalConfig);
    }
}

export default PostMixin;
