const mongoose = require('mongoose')



exports.connect= async () => {
    try {
      await mongoose.connect(
        'mongodb+srv://mopaxx:CZbynAHVSiIy1U08@cluster0.zqpxb5u.mongodb.net/?retryWrites=true&w=majority',
        {  useNewUrlParser: true }
      );
      console.log('Connection to DB Successful');
    } catch (err) {
      console.log('Connection to DB Failed');
    }
  };


  // CZbynAHVSiIy1U08


