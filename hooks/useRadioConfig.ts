import useSWR from 'swr'
import { RadioConfigsService } from '../services/radio-configs.service';
import { RadioConfigModel } from '../models/radioConfig.model';

const radioConfigService = new RadioConfigsService();

export function useRadioConfig<RadioConfigModel>(){
    const {data, error} = useSWR<RadioConfigModel>('info', fetcher)
    return {
        data,
        loading: !error && !data,
        error
    }
}

async function fetcher(){
    const data = await radioConfigService.get();
    return data;
}