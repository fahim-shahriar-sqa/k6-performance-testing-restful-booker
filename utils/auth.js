import { post } from './http-client.js';

export function getAuthToken() {
    const payload = {
        username: 'admin',
        password: 'password123'
    };

    const res = post('/auth', payload);
    
    return res.json('token');
}