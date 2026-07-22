# Test Scenarios

## 1. Authentication and Account Management
| ID | Scenario | Priority | Objective |
|---|---|---|---|
| TS-01 | User registration with valid data | High | Verify successful signup and OTP generation flow |
| TS-02 | Duplicate user registration | High | Ensure duplicate email/username is rejected |
| TS-03 | OTP verification | High | Confirm valid OTP activates user account |
| TS-04 | Login with valid credentials | High | Verify successful login and token issuance |
| TS-05 | Login with invalid credentials | High | Ensure invalid credentials are rejected |
| TS-06 | Forgot password flow | High | Verify password reset OTP is sent and processed |

## 2. Booking Workflow
| ID | Scenario | Priority | Objective |
|---|---|---|---|
| TS-07 | Create booking with valid seats | High | Ensure booking is created successfully |
| TS-08 | Prevent double booking of same seats | High | Verify seat conflict detection for overlapping bookings |
| TS-09 | View bookings list | Medium | Confirm bookings are returned for the logged-in user |
| TS-10 | View booking details | Medium | Verify booking detail retrieval works |
| TS-11 | Cancel a booking before cutoff | High | Validate cancellation is allowed before the one-hour cutoff |
| TS-12 | Cancel a booking after cutoff | High | Ensure cancellation is blocked after the cutoff |

## 3. Resale Module
| ID | Scenario | Priority | Objective |
|---|---|---|---|
| TS-13 | Request resale of a confirmed booking | High | Verify resale request submission with buyer details |
| TS-14 | Reject duplicate resale listing | Medium | Ensure a ticket already in approval flow is not resubmitted |
| TS-15 | Admin approve resale ticket | High | Validate admin approval updates the resale status |
| TS-16 | Admin reject resale ticket | High | Validate admin rejection updates the resale status |
| TS-17 | Browse resale marketplace | Medium | Confirm approved resale tickets are visible to other users |
| TS-18 | Buy resale ticket | High | Verify resale purchase flow completes successfully |

## 4. Wallet and Support
| ID | Scenario | Priority | Objective |
|---|---|---|---|
| TS-19 | View wallet balance and transactions | Medium | Ensure wallet information is returned correctly |
| TS-20 | Create support ticket | High | Verify a support request is stored and returned |
| TS-21 | View my support tickets | Medium | Confirm user-specific support tickets are retrieved |
| TS-22 | Admin view pending support tickets | Medium | Ensure admin can access pending support tickets |
