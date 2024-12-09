const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://74.225.248.0:8080");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

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

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
