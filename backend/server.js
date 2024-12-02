const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Mock data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

const products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Smartphone', price: 599.99 }
];

// Users endpoint
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Products endpoint
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Combined users and products endpoint
app.get('/api/data', (req, res) => {
  res.json({
    users,
    products
  });
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
