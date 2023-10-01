const mongoose = require('mongoose');
require('dotenv').config()

const mongoString = process.env.DB_URL;

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoString);
    console.log(`Runnning on MongoDB ${mongoose.version}`);
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = connectToDatabase