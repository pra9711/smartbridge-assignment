const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/welcome', (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  const id = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  const newUser = { id, name, email };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  const userIndex = users.findIndex(user => user.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  users[userIndex] = { id, name, email };
  res.json(users[userIndex]);
});

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  const userIndex = users.findIndex(user => user.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  const deletedUser = users[userIndex];
  users = users.filter(user => user.id !== id);
  
  res.json({ message: 'User deleted successfully', user: deletedUser });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});