import Axios, { AxiosInstance } from "axios";
import { LiveInfoModel } from "../models/liveInfo.model";

export class LiveInfoService{
    api: AxiosInstance;
    constructor() {
        this.api = Axios.create({baseURL: "http://xcast.com.br/api-json"})
    }

    async getInfo() {
        const { data } = await this.api.get('Vkc1d1RrMXJNVzVRVkRBOStS')
        console.log(data)
        return data
    }
}