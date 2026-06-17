import http from 'k6/http';

const BASE_URL = 'https://restful-booker.herokuapp.com';

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

export function createBooking(payload) {
    return http.post(
        `${BASE_URL}/booking`,
        JSON.stringify(payload),
        { headers }
    );
}

export function getBooking(id) {
    return http.get(`${BASE_URL}/booking/${id}`, {
        headers: { 'Accept': 'application/json' }
    });
}

export function updateBooking(id, payload, token) {
    return http.put(
        `${BASE_URL}/booking/${id}`,
        JSON.stringify(payload),
        {
            headers: {
                ...headers,
                Cookie: `token=${token}`
            }
        }
    );
}

export function deleteBooking(id, token) {
    return http.del(
        `${BASE_URL}/booking/${id}`,
        null,
        {
            headers: {
                'Content-Type': 'application/json',
                Cookie: `token=${token}`
            }
        }
    );
}
