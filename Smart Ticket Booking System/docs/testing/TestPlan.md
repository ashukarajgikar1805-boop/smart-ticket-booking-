# Test Plan

## 1. Document Overview
- Project: Smart Ticket Booking System
- Version: 1.0
- Date: 2026-07-21
- Purpose: Define the testing approach for the web application covering authentication, booking, resale, wallet, and support modules.

## 2. Scope
### In Scope
- User registration, OTP verification, login, forgot/reset password
- Wallet balance and transaction handling
- Booking creation, seat occupancy validation, cancellation rules
- Ticket resale request flow and admin approval/rejection
- Support ticket creation and retrieval
- Core frontend navigation and form validation

### Out of Scope
- Performance/load testing at production scale
- Security penetration testing
- Third-party payment gateway integration validation beyond happy-path behavior

## 3. Objectives
- Verify functional correctness of all major user journeys
- Ensure business rules such as seat conflicts and cancellation windows are enforced
- Validate user-facing error handling and status messages
- Provide traceability from requirements to test cases

## 4. Test Strategy
### Levels of Testing
- Unit testing: backend controller logic and validation behavior
- Integration testing: API request/response flow with database models
- UI testing: form submission, page navigation, feedback messages
- Regression testing: core workflows after fixes or enhancements

### Types of Testing
- Functional testing
- Negative testing
- Validation testing
- Error-handling testing
- Regression testing

## 5. Test Environment
- Frontend: React + Vite
- Backend: Node.js + Express + MongoDB
- Test tools: Jest for backend tests, browser/manual validation for UI flows
- Environment assumptions: local development environment with seeded test data

## 6. Entry Criteria
- Application code is available
- Backend and frontend dependencies are installed
- Core routes and UI pages are accessible
- Test data for users, bookings, and support tickets is prepared

## 7. Exit Criteria
- All planned test cases have been executed
- No critical defects remain unresolved
- All major user workflows pass testing
- Test evidence and defect logs are documented

## 8. Roles and Responsibilities
- QA/Test Lead: Prepare test cases, execute tests, report defects
- Developer: Fix defects and verify resolutions
- Product/Business Owner: Confirm expected behavior

## 9. Risks and Assumptions
- SMTP configuration may affect OTP email delivery in local testing
- Some flows depend on valid MongoDB data and authentication tokens
- Admin-only resale/support routes require an admin user context

## 10. Deliverables
- Test Plan
- Test Scenarios
- Test Cases
- Requirement Traceability Matrix (RTM)
- Defect report summary
