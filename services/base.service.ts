import Axios, { AxiosInstance } from "axios";
import { BaseModel } from "../models/base.model";


export class BaseService<T extends BaseModel> {
    api: AxiosInstance;
    constructor(protected entity: string) {
        this.api = Axios.create({baseURL: "http://192.168.0.109:3000"})
    }

    async find(query: string) {
        const url = query ? `${this.entity}?${query}`: `${this.entity}`
        const { data } = await this.api.get<T[]>(url)
        return data
    }

    async findOne(id: number) {
        const { data } = await this.api.get<T>(`${this.entity}/${id}`)
        return data
    }
}