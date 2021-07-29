import useSWR from 'swr'
import {LiveInfoModel} from '../models/liveInfo.model'
import { LiveInfoService } from '../services/live-info.service'

const liveInfoService = new LiveInfoService();

export function useInfo<LiveInfoModel>(){
    const {data, error} = useSWR<LiveInfoModel>('info', fetcher)
    return {
        data,
        loading: !error && !data,
        error
    }
}

async function fetcher(){
    const data = await liveInfoService.getInfo();
    return data;
}