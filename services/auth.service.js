import http from 'k6/http';
import { config } from '../config/config.js';

export function getToken() {

    const payload = {
        username: 'admin',
        password: 'password123'
    };

    const res = http.post(
        `${config.baseUrl}/auth`,
        JSON.stringify(payload),
        {
            headers: config.headers
        }
    );

    return res.json('token');
}