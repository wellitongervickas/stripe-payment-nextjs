const path = require('path');
require('dotenv').config()


module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/styles')],
  },
  env: {
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    SECRET_KEY: process.env.SECRET_KEY,
    APP_URL: process.env.APP_URL,
  }
}
