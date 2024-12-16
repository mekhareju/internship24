const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); // Import mongoose

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const mongoURI = 'mongodb://localhost:27017/giftShopDB'; // Change this to your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// User Schema and Model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

// API Endpoint: Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists in MongoDB
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: 'Login successful!', token: 'dummy-token' });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Base endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Gift Shop Backend!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
