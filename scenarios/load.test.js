import { group, check, sleep } from "k6";
import { get } from '../utils/http-client.js';
import { config } from '../config/config.js';

export const options = {
    stages: [
        { duration: '10s', target: 10 },
        { duration: '20s', target: 20 },
        { duration: '10s', target: 0 },
    ],
    thresholds: config.thresholds,
};

export default function () {
    group('Load Test - Get Bookings', () => {
        const res = get('/booking');
        check(response, {
            'is status code 200': (r) => r.status === 200
        });
    })

    sleep(1);

}