import axios from 'axios';
import { FETCH_ACCOUNT } from './ActionsTypes';

export function fetchAccount() {
    const request = axios.get('http://192.168.1.25:3000/account');
    return {
        type: FETCH_ACCOUNT,
        payload: request
    }
}