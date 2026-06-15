# Performance Test Strategy – RESTful Booker API

## 1. Introduction

This document defines the performance testing approach for the RESTful Booker API. The goal is to evaluate system behavior under expected and peak load conditions and ensure the API meets performance expectations.

---

## 2. Objective

The main objectives of this performance testing project are:

* Validate system stability under normal and peak load
* Measure response time, throughput, and error rate
* Identify performance bottlenecks
* Ensure API scalability for concurrent users
* Simulate real-world user behavior using K6

---

## 3. Application Under Test (AUT)

* Application: RESTful Booker API
* Type: REST API (Hotel Booking System)
* Base URL: https://restful-booker.herokuapp.com

Key endpoints:

* POST /auth
* GET /booking
* POST /booking
* GET /booking/{id}
* PUT /booking/{id}
* DELETE /booking/{id}

---

## 4. Scope

### In Scope:

* Authentication API
* Booking creation
* Booking retrieval
* Booking update
* Booking deletion

### Out of Scope:

* UI testing
* Database-level testing
* Third-party services

---

## 5. Workload Model

The system will be tested using the following workload distribution:

* 40% → Get Booking (Read operations)
* 30% → Create Booking
* 15% → Update Booking
* 15% → Delete Booking

This simulates realistic user behavior where reading data is more frequent than write operations.

---

## 6. Test Types

The following test types will be executed:

### 6.1 Smoke Test

* Small load (1–2 users)
* Validate basic system stability

### 6.2 Load Test

* Normal expected traffic (5–20 users)
* Validate system under expected usage

### 6.3 Stress Test

* Gradually increasing load until failure point
* Identify system breaking point

### 6.4 Spike Test

* Sudden increase in users
* Validate system recovery behavior

### 6.5 Soak Test

* Long duration test under moderate load
* Detect memory leaks and performance degradation

---

## 7. Performance Criteria (SLA)

The system will be considered stable if:

* 95% of requests complete under 500ms
* Error rate is less than 1%
* No sustained performance degradation under load

---

## 8. Tools Used

* K6 (Performance Testing Tool)
* JavaScript (Test Scripting Language)
* HTML Reporter (Test Reporting)
* GitHub (Version Control)

---

## 9. Entry & Exit Criteria

### Entry Criteria:

* API is accessible
* Test data is available
* Test scripts are ready

### Exit Criteria:

* All planned test scenarios executed
* Reports generated
* Bottlenecks identified
* SLA validation completed

---

## 10. Deliverables

* K6 test scripts
* Execution reports (HTML)
* Performance graphs
* Analysis report
* GitHub repository documentation

---

## 11. Assumptions

* API behaves consistently across test runs
* No external service downtime
* Test environment is stable

---

## 12. Risks

* API rate limiting
* Network latency variation
* Test data inconsistency

---

## 13. Conclusion

This performance testing project will provide insights into the scalability and reliability of the RESTful Booker API using industry-standard K6 load testing practices.