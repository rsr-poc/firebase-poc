import Axios, { AxiosInstance } from "axios";
import { LiveInfoModel } from "../models/liveInfo.model";
import AsyncStorage from '@react-native-async-storage/async-storage';

export class PushTokenService{
    api: string;
    constructor() {
        this.api = 'http://192.168.0.109:3000/api/reg-token'
    }

    async performToken(token: string){
        try {
            const value = await AsyncStorage.getItem('@push_token')
            console.log('token é...')
            console.log(value)
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
            console.info(e)
        }

    }
}