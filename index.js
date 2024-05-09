const mongoose = require('mongoose');
const dotenv = require('dotenv');

async function main() {
  dotenv.config();

  await mongoose.connect('mongodb://127.0.0.1:27017/notebook', { connectTimeoutMS: 3000 })
    .then(() => console.log('Connected to db successfully'))
    .catch(() => console.log('Failed to connect to db'));
  
  const app = require('./app');
}

main()