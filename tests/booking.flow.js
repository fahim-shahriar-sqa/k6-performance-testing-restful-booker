import { group, check, sleep } from 'k6';
import { get, post, put, del } from '../utils/http-client.js';
import { config } from '../config/config.js';

export const options = {
    vus: 5,
    duration: '20',

    thresholds: config.thresholds,

};

export default function () {

    let bookingId = null;

    // CREATE BOOKING

    group('Create Booking', () => {

        const payload = {
            firstname: 'John', 
            lastname: 'Doe', 
            totalprice: 120, 
            depositpaid: true, 
            bookingdates: { 
                checkin: '2024-01-01', 
                checkout: '2024-01-05' 
            }, 
            additionalneeds: 'Breakfast'
        }

        const res = post('/booking', payload);

        check(res, {
            'booking created': (r) => r.status === 200,
        });

        bookingId = res.json('bookingid');
    
    })

    sleep(1);

    // GET BOOKING

    group('Get Booking', () => {
        const res = get(`/booking/${bookingId}`);

        check(res, {
            'booking fetched': (r) => r.status === 200,
        });
    });

    sleep(1);

    // UPDATE BOOKING

    group('Update Booking', () =>{

        const payload = {
            firstname: 'John', 
            lastname: 'Updated', 
            totalprice: 150, 
            depositpaid: false, 
            bookingdates: { checkin: '2024-01-02', checkout: '2024-01-06' }, 
            additionalneeds: 'Dinner'
        };

        const res = put(`/booking/${bookingId}`, payload);

        check(res, {
            'Booking updated': (r) => r.status === 200,
        });
    });

    sleep(1);

    // DELETE BOOKING

    group('Delete booking', () => {
        const res = (`/booking/${bookingId}`);

        check(res, {
            'Booking deleted': (r) => r.status === 201 || r.status === 200,
        });
    });

    sleep(1);
}