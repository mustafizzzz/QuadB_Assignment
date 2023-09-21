const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://mustafizansari35:q55Alla1dMwWra5r@quadb.cojzbst.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`Connected to MongoDb`.bgYellow.green);

  } catch (error) {
    console.log(`Error in Mongodb ${error.message}`.bgRed.white);
    //exit after error
    process.exit(1);

  }
}

module.exports = connectDB;