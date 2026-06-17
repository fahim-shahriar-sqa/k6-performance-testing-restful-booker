import { check } from 'k6';

import { getToken } from '../services/auth.service.js';

import {
    createBooking,
    getBooking,
    updateBooking,
    deleteBooking
} from '../services/booking.service.js';

export function bookingFlow() {

    // AUTH
    const token = getToken();

    check(token, {
        'token generated': (t) => t !== undefined && t !== null
    });

    // CREATE
    const payload = {
        firstname: 'John',
        lastname: 'Doe',
        totalprice: 100,
        depositpaid: true,
        bookingdates: {
            checkin: '2025-01-01',
            checkout: '2025-01-05'
        },
        additionalneeds: 'Breakfast'
    };

    const createRes = createBooking(payload);

    check(createRes, {
        'booking created': (r) => r.status === 200
    });

    const bookingId = createRes.json('bookingid');

    check(bookingId, {
        'bookingId exists': (id) => id !== undefined && id !== null
    });

    // GET
    const getRes = getBooking(bookingId);

    check(getRes, {
        'booking retrieved': (r) => r.status === 200
    });

    // UPDATE
    const updateRes = updateBooking(bookingId, payload, token);

    check(updateRes, {
        'booking updated': (r) => r.status === 200
    });

    // DELETE
    const deleteRes = deleteBooking(bookingId, token);

    check(deleteRes, {
        'booking deleted': (r) => r.status === 201
    });
}