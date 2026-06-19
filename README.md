# k6 Performance Testing — Restful Booker

A k6 performance testing project for the [Restful Booker API](https://restful-booker.herokuapp.com), covering authentication, CRUD booking operations, and smoke/load test scenarios.

---

## Project Structure

├── config/
│   └── config.js              # Base URL and shared headers
├── services/
│   ├── auth.service.js        # Login and token retrieval
│   └── booking.service.js     # Create, get, update, delete booking
├── utils/
│   ├── auth.js                # Helper to get auth token
│   └── http-client.js         # Wrapper around k6 HTTP methods
├── workflows/
│   └── booking.flow.js        # Full booking flow with checks
├── scenarios/
│   ├── smoke.test.js          # Smoke test (1 VU, 1 iteration)
│   └── load.test.js           # Load test (ramping VUs)
├── tests/
│   └── booking-test.js        # Main test entry point
└── docs/
    ├── performance-test-strategy.md
    └── workload-model.md


---

## Prerequisites

- [k6](https://k6.io/docs/getting-started/installation/) installed on your machine

---

## Running the Tests

**Main booking test** (1 user, 1 iteration):
```bash
k6 run tests/booking-test.js
```

**Smoke test** (quick sanity check):
```bash
k6 run scenarios/smoke.test.js
```

**Load test** (ramping virtual users):
```bash
k6 run scenarios/load.test.js
```

---

## What the Tests Cover

1. **Auth** — POST to `/auth`, retrieve a token
2. **Create** — POST to `/booking`, create a new booking
3. **Read** — GET `/booking/:id`, retrieve the booking
4. **Update** — PUT `/booking/:id`, update with token auth
5. **Delete** — DELETE `/booking/:id`, delete with token auth

---

## Checks

Each step is verified with k6 `check()`:

| Check | Expected |
|---|---|
| token generated | token is not null |
| booking created | status 200 |
| bookingId exists | id is not null |
| booking retrieved | status 200 |
| booking updated | status 200 |
| booking deleted | status 201 |

---

## Target API

**Base URL:** `https://restful-booker.herokuapp.com`  
**Credentials:** `admin / password123`

---

## Key Metrics to Watch

- `checks_succeeded` — aim for 100%
- `http_req_failed` — aim for 0%
- `http_req_duration` — average response time per request