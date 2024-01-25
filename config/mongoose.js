uri = process.env.MONGODB_URL
const mongoose = require('mongoose');

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
