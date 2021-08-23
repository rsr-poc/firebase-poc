import Axios, { AxiosInstance } from "axios";
import { API_URL } from '@env';
import { RadioConfigModel } from "../models/radioConfig.model";

export class RadioConfigsService{
    api: AxiosInstance;
    constructor() {
        this.api = Axios.create({baseURL: API_URL})
    }

    async get(): Promise<RadioConfigModel> {
        try{
            const { data } = await this.api.get('radio-configs')
            return data
        }catch(error){
            return error
        }


    }
}