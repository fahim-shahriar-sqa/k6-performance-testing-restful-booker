import http from 'k6/http';
import { config } from '../config/config';

export function get(url) {
    return http.get(`${config.baseUrl}${url}`);
}

export function post(url, payload){
    return http.post(
       `${config.baseUrl}${url}`,
        JSON.stringify(payload),
        { headers: config.headers}
    );
}

export function put(url, payload){
    return http.put(
       `${config.baseUrl}${url}`,
        JSON.stringify(payload),
        { headers: config.headers}
    );
}

export function del(url) {
return http.del(`${config.baseUrl}${url}`);
}