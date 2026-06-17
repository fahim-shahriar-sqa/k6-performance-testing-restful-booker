import { group, check, sleep } from "k6";
import { get } from '../utils/http-client.js';
import { config } from '../config/config.js';

export const options = {
    vus: 1,
    duration: '10s',
    thresholds: config.thresholds,
}


export default function () {
    group(`Smoke Test - Get All Bookings`, () => {
        const res = get('/booking');
        check(res, {
            'Status is 200': (r) => r.status === 200,
        });
    });
};