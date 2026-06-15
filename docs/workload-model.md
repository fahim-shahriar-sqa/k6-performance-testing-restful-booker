# Workload Model – RESTful Booker API

## 1. Purpose

This document defines the workload model used to simulate realistic user behavior for performance testing of the RESTful Booker API.

---

## 2. User Behavior Analysis

In a typical hotel booking system, user activity is not evenly distributed. Most users perform read operations, while fewer users perform write operations.

Expected usage pattern:

* Viewing bookings is the most frequent action
* Creating bookings happens regularly
* Updating bookings happens occasionally
* Deleting bookings is rare

---

## 3. Traffic Distribution Model

The following distribution is used in performance testing scenarios:

* 50% → GET booking (Read operations)
* 30% → POST booking (Create operations)
* 15% → PUT booking (Update operations)
* 5% → DELETE booking (Delete operations)

This ensures realistic simulation of production-like behavior.

---

## 4. Load Stages

The following load stages are used in K6 execution:

### 4.1 Smoke Test

* 1–2 virtual users
* Basic validation of system stability

### 4.2 Load Test

* 10 → 50 virtual users
* Simulates normal expected traffic

### 4.3 Stress Test

* 50 → 150 virtual users
* Identifies system breaking point

### 4.4 Spike Test

* Sudden increase up to 200 users
* Tests system recovery behavior

### 4.5 Soak Test

* Constant 50 users for extended duration
* Detects memory leaks and performance degradation

---

## 5. Rationale

This workload model is designed to:

* Simulate realistic user behavior
* Ensure proper coverage of all API operations
* Identify system performance limits
* Validate scalability under different conditions

---

## 6. Expected Outcome

Using this workload model, we expect to:

* Measure response times under different loads
* Identify bottlenecks in API performance
* Validate system stability under stress
* Ensure reliability under sustained traffic
