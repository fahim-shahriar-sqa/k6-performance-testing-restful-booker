import http from 'k6/http';
import { config } from '../config/config.js';

export function get(url, params = {}) {
    return http.get(`${config.baseUrl}${url}`, params);
}

export function post(url, payload, params = {}) {
    return http.post(
        `${config.baseUrl}${url}`,
        JSON.stringify(payload),
        {
            headers: config.headers,
            ...params,
        }
    );
}

export function put(url, payload, params = {}) {
    return http.put(
        `${config.baseUrl}${url}`,
        JSON.stringify(payload),
        {
            headers: config.headers,
            ...params,
        }
    );
}

export function del(url, params = {}) {
    return http.del(`${config.baseUrl}${url}`, null, params);
}
