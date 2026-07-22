const mongoose = require('mongoose');
const User = require('./models/User');

(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/smartticket');
    const user = await User.findOne({ username: 'qatestuser' }).lean();
    console.log(JSON.stringify(user, null, 2));
    await mongoose.disconnect();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
