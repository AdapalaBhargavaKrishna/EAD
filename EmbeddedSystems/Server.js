const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  country: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  addresses: [addressSchema],
});

const User = mongoose.model("User", userSchema);

async function run() {
  try {
    await mongoose.connect("mongodb://localhost:27017/testdb");
    console.log("Connected to MongoDB");

    const user = new User({
      name: "John Doe",
      email: "john@example.com",
      addresses: [
        { street: "123 Main St", city: "New York", country: "USA" },
        { street: "456 Elm St", city: "Boston", country: "USA" },
      ],
    });

    await user.save();
    console.log("User saved successfully");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}
run();