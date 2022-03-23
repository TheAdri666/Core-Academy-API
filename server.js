const mongoose = require('mongoose');
const app = require('./app');

const PORT = 3000;
const mongodb = process.env.MONGODB || 'mongodb://localhost:27017/API';

mongoose.connect(mongodb, (err) => {
  if (err) console.log(`ERROR: connecting to Database. ${err}`);
  else app.listen(PORT, console.log(`Server initiated on port ${PORT}`));
});
