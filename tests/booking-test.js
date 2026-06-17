import { bookingFlow } from '../workflows/booking.flow.js';

export const options = {
    vus: 1,
    iterations: 1
};

export default function () {
    bookingFlow();
}