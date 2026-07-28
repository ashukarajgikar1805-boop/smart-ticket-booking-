# Test Cases

## Authentication

### TC-01: Successful user registration
- Scenario: TS-01
- Precondition: No existing user with the same email/username
- Steps:
  1. Open signup page
  2. Enter valid username, email, and password
  3. Submit the form
- Expected Result:
  - User account is created
  - OTP is generated and sent
  - Success message is displayed

### TC-02: Duplicate registration is rejected
- Scenario: TS-02
- Steps:
  1. Attempt signup with an already registered email or username
- Expected Result:
  - API returns 400
  - Error message indicates duplicate email/username

### TC-03: OTP verification succeeds
- Scenario: TS-03
- Steps:
  1. Submit correct username and OTP
- Expected Result:
  - Account is marked verified
  - JWT token is returned

### TC-04: Login with valid credentials
- Scenario: TS-04
- Steps:
  1. Enter valid username/email and password
  2. Submit login form
- Expected Result:
  - User is authenticated
  - Token is returned and user is redirected

### TC-05: Login with invalid credentials
- Scenario: TS-05
- Steps:
  1. Enter invalid password or unknown username
- Expected Result:
  - Authentication fails with appropriate error
  - No token is issued

### TC-06: Forgot and reset password flow
- Scenario: TS-06
- Steps:
  1. Submit registered email for password reset
  2. Enter the received OTP and a new password
- Expected Result:
  - Reset succeeds and user can log in with the new password

## Booking Workflow

### TC-07: Create booking successfully
- Scenario: TS-07
- Steps:
  1. Log in as a valid user
  2. Select an event and seats
  3. Submit booking request
- Expected Result:
  - Booking is created with status Confirmed
  - Confirmation response is returned

### TC-08: Seat conflict is detected
- Scenario: TS-08
- Steps:
  1. Create a booking for a seat
  2. Attempt to book the same seat again for the same event/date/time
- Expected Result:
  - Booking request is rejected with 409 conflict
  - Conflict seats are returned

### TC-09: Booking list is shown for logged-in user
- Scenario: TS-09
- Steps:
  1. Create one or more bookings
  2. Call the bookings endpoint
- Expected Result:
  - Only the current user’s bookings are returned

### TC-10: Booking detail retrieval works
- Scenario: TS-10
- Steps:
  1. Request booking detail using a valid booking ID
- Expected Result:
  - Correct booking information is returned

### TC-11: Cancel booking before cutoff
- Scenario: TS-11
- Steps:
  1. Create a future booking
  2. Cancel it more than one hour before show time
- Expected Result:
  - Booking status changes to Canceled

### TC-12: Cancel booking after cutoff
- Scenario: TS-12
- Steps:
  1. Create a booking close to show time or modify test data to be within one hour
  2. Attempt cancellation
- Expected Result:
  - Cancellation is blocked and an error message is shown

## Resale Module

### TC-13: Resale request submitted successfully
- Scenario: TS-13
- Steps:
  1. Create a confirmed booking
  2. Submit resale details with buyer name, contact, and email
- Expected Result:
  - Resale request is created with status Pending

### TC-14: Duplicate resale listing is prevented
- Scenario: TS-14
- Steps:
  1. Submit a resale request for a booking already in Pending/Approved state
- Expected Result:
  - Duplicate request is rejected with conflict error

### TC-15: Admin approves resale request
- Scenario: TS-15
- Steps:
  1. Log in as admin
  2. Open pending resale tickets
  3. Approve one request
- Expected Result:
  - Resale status changes to Approved

### TC-16: Admin rejects resale request
- Scenario: TS-16
- Steps:
  1. Log in as admin
  2. Reject a pending resale ticket
- Expected Result:
  - Resale status changes to Rejected

### TC-17: Marketplace shows approved resale tickets
- Scenario: TS-17
- Steps:
  1. Log in as a different user
  2. Open resale marketplace
- Expected Result:
  - Only approved resale tickets from other users are shown

### TC-18: Buyer purchases resale ticket
- Scenario: TS-18
- Steps:
  1. Select an approved resale listing
  2. Submit purchase request
- Expected Result:
  - Purchase flow completes and resale status is updated appropriately

## Wallet and Support

### TC-19: Wallet balance is returned correctly
- Scenario: TS-19
- Steps:
  1. Log in as a user with wallet activity
  2. Request wallet endpoint
- Expected Result:
  - Balance and transaction history are returned

### TC-20: Support ticket is created
- Scenario: TS-20
- Steps:
  1. Submit a support ticket with subject and message
- Expected Result:
  - Ticket is created and returned with Pending status

### TC-21: User can view own support tickets
- Scenario: TS-21
- Steps:
  1. Request the user’s support tickets
- Expected Result:
  - Only tickets belonging to the logged-in user are returned
