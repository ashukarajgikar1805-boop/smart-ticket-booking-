# Requirement Traceability Matrix (RTM)

## Requirements to Test Coverage

| Requirement ID | Requirement | Source | Test Case IDs |
|---|---|---|---|
| R1 | Users can register with a username, email, and password | Auth signup flow | TC-01, TC-02 |
| R2 | Users must verify their email via OTP | OTP verification flow | TC-03 |
| R3 | Registered users can log in using username or email | Login flow | TC-04, TC-05 |
| R4 | Users can reset a forgotten password through OTP verification | Forgot/reset password flow | TC-06 |
| R5 | Authenticated users can view wallet balance and related transactions | Wallet endpoint | TC-19 |
| R6 | Authenticated users can create bookings for selected seats | Booking creation flow | TC-07, TC-08 |
| R7 | The system must prevent seat double-booking for the same event/date/time | Booking conflict validation | TC-08 |
| R8 | Users can view their bookings and booking details | Booking retrieval flow | TC-09, TC-10 |
| R9 | Users can cancel a confirmed booking only before the cutoff window | Cancellation rules | TC-11, TC-12 |
| R10 | Users can request resale of confirmed bookings with buyer details | Resale request flow | TC-13, TC-14 |
| R11 | Admins can approve or reject resale requests | Admin resale workflow | TC-15, TC-16 |
| R12 | Approved resale tickets should be visible in the marketplace | Resale marketplace flow | TC-17, TC-18 |
| R13 | Users can raise support tickets for issues or requests | Support ticket creation | TC-20 |
| R14 | Users and admins can retrieve relevant support ticket lists | Support ticket retrieval | TC-21, TC-22 |

## Coverage Summary
- Functional requirements: Covered by TC-01 through TC-22
- Business rules: Covered by TC-08, TC-11, TC-12, TC-14, TC-15, TC-16
- User experience validation: Covered by TC-01, TC-04, TC-06, TC-07, TC-20
