const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/REUNION')
  .then(console.log("Login Successful"))
  .catch(console.error)
