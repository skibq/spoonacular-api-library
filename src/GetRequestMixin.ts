import axios from 'Axios'
import BaseRequest from "./baseRequest"; // todo: alias

const GetMixin = (superclass: typeof BaseRequest) => class extends superclass  {
    constructor() {
        super();
    }
    public get() {
        const requestUrl = this.basePath + this.endpointPath;
        return axios.get(requestUrl, this.basicConfig);
    }
};

export default GetMixin;
