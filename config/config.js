export const config = {
    baseUrl: _ENV.BASE_URL || 'https://restful-booker.herokuapp.com',

    thresholds: {
        http_req_duration: ['p(95)<500'],
        http_req_failed: ['rate<.01'],
    },

    headers: {
        'Content-Type': 'application/json'
    }
}