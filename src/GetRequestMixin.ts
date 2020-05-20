import axios from 'axios'
import BaseRequest from "./baseRequest"; // todo: alias

const GetRequestMixin = (superclass: typeof BaseRequest) => class extends superclass  {
    protected get() {
        const requestUrl = this.basePath + this.endpointPath;
        return axios.get(requestUrl, this.basicConfig);
    }
};

export default GetRequestMixin;
