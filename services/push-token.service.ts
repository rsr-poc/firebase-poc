import Axios, { AxiosInstance } from "axios";
import { LiveInfoModel } from "../models/liveInfo.model";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env';
export class PushTokenService{
    api: string;
    constructor() {
        this.api = `${API_URL}reg-token`
    }

    async performToken(token: string){
        try {
            const value = await AsyncStorage.getItem('@push_token')
            if(value && value == token) {
                console.log('token already exists');
                return;
            }else{
                console.log('saving new token..')
                return this.saveToken(token)
            }
          } catch(e) {
            // error reading value
          }
    }

    async saveToken(token: string) {
        try {
            return fetch(this.api, {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  pushToken: token
                })
              }).then((response)=> {
                AsyncStorage.setItem('@push_token', token)
                console.info(JSON.stringify(response))
              })
              .catch((error)=>console.info(JSON.stringify(error)))
        } catch (e) {
            // saving error
            console.log('deu erro')
            console.info(e)
        }

    }
}