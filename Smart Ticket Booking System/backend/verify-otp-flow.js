const http = require('http');
const mongoose = require('mongoose');
const User = require('./models/User');

const signupData = {
  username: 'otpflowuser',
  email: 'otpflowuser@example.com',
  password: 'Password123!'
};

function postJson(path, body) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        host: 'localhost',
        port: 8000,
        path,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          resolve({ statusCode: res.statusCode, body: data });
        });
      }
    );

    req.on('error', reject);
    req.write(JSON.stringify(body));
    req.end();
  });
}

(async () => {
  try {
    const signupResult = await postJson('/api/signup/', signupData);
    console.log('SIGNUP_STATUS=' + signupResult.statusCode);
    console.log(signupResult.body);

    await mongoose.connect('mongodb://localhost:27017/smartticket');
    const user = await User.findOne({ username: signupData.username }).lean();
    if (!user) {
      console.log('USER_NOT_FOUND');
      await mongoose.disconnect();
      process.exit(1);
    }

    console.log('OTP_CODE=' + (user.otp && user.otp.code ? user.otp.code : 'NONE'));
    const verifyResult = await postJson('/api/verify-otp/', {
      username: signupData.username,
      otp: user.otp && user.otp.code ? user.otp.code : ''
    });

    console.log('VERIFY_STATUS=' + verifyResult.statusCode);
    console.log(verifyResult.body);

    await mongoose.disconnect();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
