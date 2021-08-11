import Axios, { AxiosInstance } from "axios";
import { LiveInfoModel } from "../models/liveInfo.model";
import { RadioConfigsService } from "./radio-configs.service";

export class LiveInfoService{
    
    async getInfo() {
        const radioConfigService = new RadioConfigsService();
        const config = await radioConfigService.get();

        console.log(config)
        const { data, status } = await Axios.get(config.api)
        console.log(`dados : ${status}`)
        return data
    }
}