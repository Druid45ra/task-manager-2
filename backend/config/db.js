const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false); // Adaugă această linie pentru a evita avertismentul strictQuery
    await mongoose.connect("mongodb://localhost:27017/taskmanager", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.error(error.stack);
    process.exit(1);
  }
};

module.exports = connectDB;
