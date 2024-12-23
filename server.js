const express = require('express');
const { MongoClient } = require('mongodb'); 
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const uri = 'mongodb+srv://<mekhareju>:<user123>@cluster0.gakd5.mongodb.net/giftShopDB?retryWrites=true&w=majority';

let client;

async function connectToMongoDB() {
  try {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
  }
}

connectToMongoDB();

app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const db = client.db('giftShopDB'); 
    const usersCollection = db.collection('users'); 

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { email, password: hashedPassword };
    await usersCollection.insertOne(newUser);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

process.on('SIGINT', async () => {
  await client.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});
